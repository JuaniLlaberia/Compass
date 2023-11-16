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
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

swipeSchema.index({ swipeFrom: 1, swipeTo: 1 });
swipeSchema.index({ createdAt: 1 }, { expires: 15 * 24 * 60 * 60 }); //Swipe docs expire after 15 days

const Swipes = mongoose.model('Swipes', swipeSchema);

module.exports = Swipes;
