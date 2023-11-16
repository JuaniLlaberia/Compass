const mongoose = require('mongoose');

const matchesSchema = new mongoose.Schema({
  users: {
    type: [mongoose.Schema.ObjectId],
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Matches = mongoose.model('Matches', matchesSchema);

module.exports = Matches;
