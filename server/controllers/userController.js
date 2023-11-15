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
