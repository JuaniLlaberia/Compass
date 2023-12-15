const mongoose = require('mongoose');

const matchesSchema = new mongoose.Schema({
  users: {
    type: [mongoose.Schema.ObjectId],
    ref: 'User',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

matchesSchema.index({ users: 1 });

const Matches = mongoose.model('Matches', matchesSchema);

module.exports = Matches;
