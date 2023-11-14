const User = require('../models/userModel');

exports.updateUser = async (req, res) => {
  //Filter fields that user can't modify
  let filteredBody = { ...req.body };
  ['_id', 'email'].forEach(field => delete filteredBody[field]);

  //Find and update the user
  const user = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: 'success', data: user });
};
