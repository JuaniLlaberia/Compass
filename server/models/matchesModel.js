const mongoose = require('mongoose');

const matchesSchema = new mongoose.Schema({
  userOne: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Matches must have two users.'],
  },
  userTwo: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Matches must have two users.'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Matches = mongoose.model('Matches', matchesSchema);

module.exports = Matches;
