const Swipes = require('../models/swipeModel');
const Matches = require('../models/matchesModel');
const { default: mongoose } = require('mongoose');

exports.swipeRight = async (req, res) => {
  const crrUser = req.user._id;
  const swipedUser = req.body.swipedUserId;

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
      res.status(400).json({
        status: 'failed',
        error: err.message,
        message: 'The DB was not modified due to the error.',
      });
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

  //4) Return response (match === false) + Decrese user likes
  res.status(200).json({ status: 'success', match: isMatch });
};

exports.swipeLeft = async (req, res) => {
  try {
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
    //3) Response
    res.status(200).json({ status: 'success' });
  } catch (err) {
    res.status(400).json({ status: 'failed', message: err.message });
  }
};
