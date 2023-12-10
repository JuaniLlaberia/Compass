const catchErrorAsync = require('../utils/catchAsyncErrors');
const Message = require('../models/messageModel');
const Matches = require('../models/matchesModel');

exports.getChats = catchErrorAsync(async (req, res) => {
  const chats = await Matches.aggregate([
    {
      $match: {
        users: req.user._id,
        isActive: true,
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
    data: chats,
  });
});

exports.getMessages = catchErrorAsync(async (req, res) => {
  const chatId = req.params.chatId;

  let query = Message.find({ chatId: chatId }).sort({
    createdAt: -1,
  });

  if (req.query.page) {
    const page = Number(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);
  }

  const totalMessages = await Message.countDocuments(query._conditions);

  const messages = await query;

  res.status(200).json({
    status: 'success',
    data: messages,
    count: totalMessages,
    pages: Math.ceil(totalMessages / 20),
  });
});
