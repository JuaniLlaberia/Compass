const catchErrorAsync = require('../utils/catchAsyncErrors');
const Chat = require('../models/chatModel');
const Message = require('../models/messageModel');

exports.getChats = catchErrorAsync(async (req, res) => {
  const chats = await Chat.aggregate([
    {
      $match: {
        users: req.user._id,
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
  const messages = await Message.find({ chatId: chatId }).sort({
    createdAt: 1,
  });

  res.status(200).json({
    status: 'success',
    data: messages,
  });
});
