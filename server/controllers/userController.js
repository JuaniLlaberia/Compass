const sub = require('date-fns/sub');
const User = require('../models/userModel');
const Matches = require('../models/matchesModel');
const catchErrorAsync = require('../utils/catchAsyncErrors');

exports.getUser = (req, res) => {
  res.status(200).json({ status: 'success', data: req.user });
};

exports.updateUser = catchErrorAsync(async (req, res) => {
  //Filter fields that user can't modify
  let filteredBody = { ...req.body };
  ['_id', 'email', 'membership'].forEach(field => delete filteredBody[field]);

  //Find and update the user
  const user = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: 'success', data: user });
});

exports.getAllMatches = catchErrorAsync(async (req, res) => {
  const matches = await Matches.find({
    users: req.user._id,
  });

  res
    .status(200)
    .json({ status: 'success', count: matches.length, data: matches });
});

exports.getUsers = catchErrorAsync(async (req, res) => {
  const { distance, category, gender, minAge, maxAge } = req.user.filters;

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
        $and: [{ hideUser: false }, { newUser: false }, { category }],
      },
    },
  ];

  //Filter for user with 'employer' role (Gender & age range)
  if (gender & minAge & maxAge)
    aggStages.push({
      $match: {
        $and: [
          { gender },
          { birthDate: { $gte: sub(new Date(), { years: maxAge }) } },
          { birthDate: { $lte: sub(new Date(), { years: minAge }) } },
        ],
      },
    });

  //Filter for user with 'employee' role (distance to employer)
  if (distance) {
    if (!req.body.coordinates)
      res
        .status(400)
        .json({ status: 'failed', message: 'Missing user coordinates.' });

    const radius = distance / 6378.1;
    const [lat, lng] = req.body.coordinates;

    aggStages.push({
      $match: {
        location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
      },
    });
  }

  //Returning just 2 random docs
  aggStages.push({
    $sample: {
      size: 2,
    },
  });

  //Not retrieve unwanted fields
  aggStages.push({
    $project: {
      email: 0,
      __v: 0,
      newUser: 0,
      hideUser: 0,
      membership: 0,
      birthDate: 0,
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
