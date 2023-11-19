const Matches = require('../models/matchesModel');
const catchErrorAsync = require('../utils/catchAsyncErrors');
const CustomError = require('../utils/error');

exports.deleteMatch = catchErrorAsync(async (req, res) => {
  //Check if match belongs to auth user
  const matchToDelete = await Matches.findById(req.params.matchId);

  if (!matchToDelete.users.includes(req.user._id))
    return next(new CustomError('This match does not belong to you', 401));

  //Delete match
  await Matches.findByIdAndDelete(req.params.matchId);

  res.status(200).json({ status: 'success', message: 'Match canceled.' });
});
