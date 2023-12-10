const { default: mongoose } = require('mongoose');
const Matches = require('../models/matchesModel');
const Message = require('../models/messageModel');
const catchErrorAsync = require('../utils/catchAsyncErrors');
const CustomError = require('../utils/error');

exports.getMatches = catchErrorAsync(async (req, res) => {
  const matches = await Matches.aggregate([
    {
      $match: {
        users: req.user._id,
        isActive: false,
      },
    },
    {
      $unwind: '$users',
    },
    {
      $match: {
        users: { $ne: req.user._id },
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'users',
        foreignField: '_id',
        as: 'userData',
      },
    },
    {
      $project: {
        _id: 1,
        isActive: 1,
        userData: {
          fullName: 1,
          profileImage: 1,
          _id: 1,
        },
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: matches,
  });
});

exports.deleteMatch = catchErrorAsync(async (req, res) => {
  //Check if match belongs to auth user
  const matchToDelete = await Matches.findById(req.params.matchId);

  if (!matchToDelete.users.includes(req.user._id))
    return next(new CustomError('This match does not belong to you', 401));

  //Delete match
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await Matches.findByIdAndDelete(req.params.matchId);
    await Message.deleteMany({ chatId: req.params.matchId });

    await session.commitTransaction();
  } catch (err) {
    await session.abortTransaction();
  } finally {
    session.endSession();
  }

  res.status(200).json({ status: 'success', message: 'Match canceled.' });
});
