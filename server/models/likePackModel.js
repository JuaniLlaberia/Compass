const mongoose = require('mongoose');

const likesPackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Packages must have a name.'],
  },
  likesAmount: {
    type: Number,
    required: [true, 'Packages must have an amount of likes.'],
  },
  price: {
    type: Number,
    required: [true, 'Packages must have a price.'],
  },
  description: {
    type: String,
    maxLegth: [
      200,
      'Package description can not have more that 200 characters',
    ],
  },
  image: {
    type: String,
  },
});

const LikesPack = mongoose.model('LikesPack', likesPackSchema);
module.exports = LikesPack;
