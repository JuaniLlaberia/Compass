const mongoose = require('mongoose');

const swipeSchema = new mongoose.Schema({
  swipeFrom: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Swipes must have a sender.'],
  },
  swipeTo: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Swipes must have a reciber.'],
  },
});

swipeSchema.index({ swipeFrom: 1, swipeTo: 1 });

const Swipes = mongoose.model('Swipes', swipeSchema);

module.exports = Swipes;
