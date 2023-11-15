const sub = require('date-fns/sub');
const User = require('../models/userModel');
const Matches = require('../models/matchesModel');

exports.getUser = (req, res) => {
  res.status(200).json({ status: 'success', data: req.user });
};

exports.updateUser = async (req, res) => {
  //Filter fields that user can't modify
  let filteredBody = { ...req.body };
  ['_id', 'email', 'membership'].forEach(field => delete filteredBody[field]);

  //Find and update the user
  const user = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: 'success', data: user });
};

exports.getAllMatches = async (req, res) => {
  try {
    const matches = await Matches.find({
      users: req.user._id,
    });

    res
      .status(200)
      .json({ status: 'success', count: matches.length, data: matches });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  const { distance, category, gender, minAge, maxAge } = req.user.filters;

  const query = User.find({
    $and: [
      { _id: { $ne: req.user._id } }, //Users that are not auth one
      { hideUser: false }, //That are public/not hidden
      { newUser: false }, //That have finish acc creation process
    ],
  }).select('-email -__v -newUser -hideUser -membership -birthDate');

  //Users that match the category you are searching
  if (category) query.find({ category });

  //Users that match the gender
  if (gender) query.find({ gender });

  //Users that match the age range
  if (minAge || maxAge) {
    query.find({
      $and: [
        { birthDate: { $gte: sub(new Date(), { years: maxAge }) } },
        { birthDate: { $lte: sub(new Date(), { years: minAge }) } },
      ],
    });
  }

  //Users in a certain distance raidius from you (How to get user location??)
  if (distance) {
    const radius = distance / 6378.1;

    const [lat, lng] = req.body.coordinates;

    query.find({
      location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
    });
  }

  //FILTER FOR ALREADY SEEN USERS
  //PAGINATION SYSTEM
  //SHUFFLE

  try {
    const users = await query;
    res.status(200).json({ status: 'success', data: users });
  } catch (err) {
    res.status(404).json({ status: 'failed' });
  }
};
