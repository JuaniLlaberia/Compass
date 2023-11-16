const mongoose = require('mongoose');
const differenceInISOWeekYears = require('date-fns/differenceInISOWeekYears');

const userSchema = new mongoose.Schema(
  {
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
      // required: [true, 'User must have a role.'],
      enum: ['employee', 'employer'],
    },
    birthDate: {
      type: Date,
      // required: [true, 'User must have a birth date.'],
    },
    gender: {
      type: String,
      // required: [true, 'User must have a gender'],
      enum: ['Male', 'Female', 'Other'],
    },
    summary: {
      type: String,
      maxLength: [300, 'User description must have less than 300 characters.'],
    },
    category: {
      type: String,
      // required: [true, 'User must belong to a category.'],
    },
    filters: {
      distance: String, //From user to store
      category: String, //For both reg. users and stores
      minAge: Number, //For stores to filter users by age range
      maxAge: Number,
      gender: String, //For stores to filter by user gender
    },
    membership: {
      type: String,
      default: 'regular',
      enum: ['regular', 'premium'],
    },
    location: {
      type: {
        type: String,
        default: 'Point',
        coordinates: ['Point'],
      },
      coordinates: [Number],
    },
    hideUser: {
      type: Boolean,
      default: false,
    },
    newUser: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual('age').get(function () {
  const age = differenceInISOWeekYears(new Date(), this.birthDate);
  return age;
});

const User = mongoose.model('User', userSchema);
module.exports = User;
