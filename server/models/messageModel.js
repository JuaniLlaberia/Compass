const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    recipient: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    chatId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Chat',
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
