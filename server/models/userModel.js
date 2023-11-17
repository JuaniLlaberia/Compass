const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Users must have a name.'],
    maxLength: [40, 'User name must have less than 40 characters.'],
  },
  email: {
    type: String,
    required: [true, 'Users must have an email.'],
    validate: {
      validator: value =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        ),
      message: 'Email is not valid.',
    },
  },
  profileImage: {
    type: String,
    default: 'default.png',
  },
  role: {
    type: String,
    enum: ['employee', 'employer'],
  },
  birthDate: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  summary: {
    type: String,
    maxLength: [300, 'User description must have less than 300 characters.'],
  },
  category: {
    type: String,
  },
  filters: {
    distance: String,
    category: String,
    minAge: Number,
    maxAge: Number,
    gender: String,
  },
  membership: {
    type: String,
    default: 'regular',
    enum: ['regular', 'premium'],
  },
  likes: {
    type: Number,
    default: 10,
  },
  extraLikes: {
    type: Number,
    default: 0,
  },
  location: {
    type: {
      type: String,
      coordinates: ['Point'],
    },
    coordinates: [Number],
  },
  interactions: { type: [mongoose.Schema.ObjectId], default: [] },
  hideUser: {
    type: Boolean,
    default: false,
  },
  newUser: {
    type: Boolean,
    default: true,
  },
});

userSchema.index({ location: '2dsphere' });
userSchema.index({ interactions: 1 });

const User = mongoose.model('User', userSchema);
module.exports = User;
