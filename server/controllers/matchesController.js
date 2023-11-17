const Matches = require('../models/matchesModel');

exports.deleteMatch = async (req, res) => {
  //Check if match belongs to auth user
  const matchToDelete = await Matches.findById(req.params.matchId);

  if (!matchToDelete.users.includes(req.user._id))
    return res.status(401).json({
      status: 'failed',
      message: 'This match does not belong to you.',
    });

  //Delete match
  await Matches.findByIdAndDelete(req.params.matchId);

  res.status(200).json({ status: 'success', message: 'Match canceled.' });
};
