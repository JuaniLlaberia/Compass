const sub = require('date-fns/sub');
const sharp = require('sharp');
const {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} = require('firebase/storage');
const User = require('../models/userModel');
const catchErrorAsync = require('../utils/catchAsyncErrors');
const firebase = require('../utils/firebase');

exports.getUser = (req, res) => {
  res.status(200).json({ status: 'success', data: req.user });
};

exports.updateUser = catchErrorAsync(async (req, res) => {
  let imageLink = '';

  //If image update else keep going
  if (req?.file?.buffer) {
    //Optimize image + proper format
    const optimizedImg = await sharp(req.file.buffer)
      .resize(300, 300)
      .toFormat('webp')
      .webp({ quality: 85 })
      .toBuffer();

    //Upload buffer to bucket
    const bucketRef = ref(firebase.storage, `${req.user._id}.webp`);

    const imgSnapshot = await uploadBytesResumable(bucketRef, optimizedImg, {
      contentType: 'image/webp',
    });

    //Get access url
    imageLink = await getDownloadURL(imgSnapshot.ref);
  }

  let coords;

  if (req.body.role === 'business') {
    coords = req.body?.location?.split(',').map(coord => Number(coord));
  }

  //Filter fields that user can't modify
  let filteredBody = {
    ...req.body,
    profileImage: imageLink === '' ? req.body.profileImage : imageLink,
    location: req.body.role === 'business' ? coords : undefined,
  };
  ['_id', 'email'].forEach(field => delete filteredBody[field]);

  if (req.body?.filters && req.user.newUser)
    filteredBody.filters = JSON.parse(req.body.filters);

  //Find and update the user
  const user = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: 'success', data: user });
});

exports.deleteUser = catchErrorAsync(async (req, res) => {
  //Remove profile img from storage
  const imgToRemoveRef = ref(firebase.storage, req.user.profileImage);
  await deleteObject(imgToRemoveRef);

  //Remove user from database
  await User.findByIdAndDelete(req.user._id);

  res.status(200).json({ status: 'success', message: 'Account deleted.' });
});

exports.getUsers = catchErrorAsync(async (req, res) => {
  const { distance, gender, minAge, maxAge } = req.user.filters;
  const aggStages = [
    {
      //Filter auth user and all already interacted users
      $match: {
        $and: [
          { _id: { $ne: req.user._id } },
          { _id: { $nin: req.user.interactions } },
        ],
      },
    },
    {
      $match: {
        $and: [
          { hideUser: false },
          { newUser: false },
          { category: { $elemMatch: { $in: req.user.category } } },
        ],
      },
    },
  ];

  //Filter for user with 'employer' role (Gender & age range)
  if (req.user.role === 'business')
    aggStages.push({
      $match: {
        $and: [
          { gender },
          { birthDate: { $gte: sub(new Date(), { years: maxAge }) } },
          { birthDate: { $lte: sub(new Date(), { years: minAge }) } },
          { role: 'user' },
        ],
      },
    });

  //Filter for user with 'employee' role (distance to employer)
  if (req.user.role === 'user') {
    if (!req.query.lng || !req.query.lat)
      return res
        .status(400)
        .json({ status: 'failed', message: 'Missing user coordinates.' });

    const radius = distance / 6378.1;
    const { lng, lat } = req.query;

    aggStages.push({
      $match: {
        $and: [
          {
            location: {
              $geoWithin: {
                $centerSphere: [[Number(lng), Number(lat)], radius],
              },
            },
          },
          {
            role: 'business',
          },
        ],
      },
    });
  }

  //Returning just 2 random docs
  aggStages.push({
    $sample: {
      size: 1,
    },
  });

  //Not retrieve unwanted fields
  aggStages.push({
    $project: {
      email: 0,
      extraLikes: 0,
      likes: 0,
      filters: 0,
      location: 0,
      role: 0,
      __v: 0,
      newUser: 0,
      hideUser: 0,
    },
  });

  //Aggregation pipeline
  const users = await User.aggregate(aggStages);
  res.status(200).json({ status: 'success', data: users });
});

//Called from a cron job to reset likes ones per day
exports.resetLikes = catchErrorAsync(async (req, res) => {
  await User.updateMany({ $set: { likes: 10 } });
  res
    .status(200)
    .json({ status: 'success', message: 'Likes have been reseted.' });
});
