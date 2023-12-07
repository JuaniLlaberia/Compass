const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  users: {
    type: [mongoose.Schema.ObjectId],
    ref: 'User',
  },
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
