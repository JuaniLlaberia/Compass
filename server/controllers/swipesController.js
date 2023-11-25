const mongoose = require('mongoose');
const Swipes = require('../models/swipeModel');
const Matches = require('../models/matchesModel');
const User = require('../models/userModel');
const catchErrorAsync = require('../utils/catchAsyncErrors');
const CustomError = require('../utils/error');

const addInteraction = catchErrorAsync(async (userId, userToAdd, likesType) => {
  const updateQuery = {
    $addToSet: { interactions: userToAdd },
  };

  if (likesType === 'regular') updateQuery.$inc = { likes: -1 };
  if (likesType === 'extra') updateQuery.$inc = { extraLikes: -1 };

  await User.findByIdAndUpdate(userId, updateQuery);
});

exports.swipeRight = catchErrorAsync(async (req, res, next) => {
  const crrUser = req.user._id;
  const swipedUser = req.body.swipedUserId;

  if (req.user.likes <= 0 && req.user.extraLikes <= 0)
    return res
      .status(400)
      .json({ status: 'failed', message: 'You have no more likes' });

  const hasExtraLikes = req.user.extraLikes >= 1;

  //1) Check if swipe is a match
  const swipeObject = await Swipes.exists({
    $and: [{ swipeFrom: swipedUser }, { swipeTo: crrUser }],
  });

  const isMatch = Boolean(swipeObject);

  //2) If match -> Run match code
  if (isMatch) {
    //Start mongoDB session
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      //Create match
      await Matches.create({ users: [crrUser, swipedUser] });
      //   await Matches.create({ userOne: crrUser, userTwo: swipedUser });
      //Remove swipes
      await Swipes.findByIdAndDelete(swipeObject);
      //Create chat (in the future)

      //As all changes were OK we commit them to the database
      await session.commitTransaction();
    } catch (err) {
      //We abort and cancel all changes (DB is intact)
      await session.abortTransaction();
      return next(
        new CustomError('The DB was not modified due to the error.', 400)
      );
    } finally {
      //We close the session
      session.endSession();
    }
  } else {
    //3) If not match -> Create new swipe doc);
    await Swipes.create({
      swipeFrom: crrUser,
      swipeTo: swipedUser,
    });
  }

  //Add user id to interactions array in auth user
  addInteraction(crrUser, swipedUser, hasExtraLikes ? 'extra' : 'regular');

  //4) Return response (match === false) + Decrese user likes
  res.status(200).json({ status: 'success', match: isMatch });
});

exports.swipeLeft = catchErrorAsync(async (req, res, next) => {
  console.log(req.body.swipedUserId);
  //1) Check if user you swiped left (reject) has swiped you right before
  const isSwiped = await Swipes.exists({
    $and: [
      { swipeFrom: req.body.swipedUserId },
      { swipeTo: req.user._id.valueOf() },
    ],
  });

  //2) If true -> Remove swipe
  if (isSwiped) {
    await Swipes.findByIdAndDelete(isSwiped);
  }

  //Add interaction
  addInteraction(req.user._id.valueOf(), req.body.swipedUserId);

  //3) Response
  res.status(200).json({ status: 'success' });
});

exports.undoPreviousSwipe = catchErrorAsync(async (req, res, next) => {
  const lastSwiped = req.user.interactions.at(-1);
  let user;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    //Remove id from interactions array
    await User.findByIdAndUpdate(req.user._id, { $pop: { interactions: 1 } });

    //Remove Swipe in case it right
    await Swipes.findOneAndDelete({
      swipeFrom: req.user._id,
      swipeTo: lastSwiped,
    });

    //Return the user data (see how to handle this in front) -> or not return and just have the chance to find it in the future
    user = await User.findById(lastSwiped).select(
      '-interactions -membership -hideUser -newuser -__v -birthDate'
    );

    session.commitTransaction();
  } catch (err) {
    session.abortTransaction();
    return next(new CustomError('The DB was not modified.', 400));
  } finally {
    session.endSession();
  }

  res
    .status(200)
    .json({ status: 'success', data: user || 'No swipe to undo.' });
});
