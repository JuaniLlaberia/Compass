const jwt = require('jsonwebtoken');
const getGoogleTokens = require('../utils/authProviders/getGoogleTokens');
const User = require('../models/userModel');
const getFacebookTokens = require('../utils/authProviders/getFacebookTokens');

//JWT
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const createSendJWT = (id, res) => {
  const token = signToken(id);

  const cookieOptions = {
    expires: new Date(Date.now() + 6 * 24 * 60 * 1000),
    path: '/',
    httpOnly: true,
    // secure: true,
    sameSite: 'lax',
  };

  res.cookie('jwt', token, cookieOptions);
};

const checkSignUser = async (user, res) => {
  //Check if user already exist
  const userId = await User.exists({ email: user.email });
  const isUserNew = !Boolean(userId);

  if (isUserNew) {
    //Create user in DB with provider info
    const { email, name } = user;

    try {
      const newUser = await User.create({
        email,
        fullName: name,
      });

      //JWT process
      createSendJWT(newUser._id.valueOf(), res);

      //Redicrect to finish profile page
      return res.status(201).redirect('http://localhost:5173');
    } catch (err) {
      console.log(err);
    }
  }

  //Create JWT token for authorization and store it in the cookies.
  createSendJWT(userId._id.valueOf(), res);

  //Redirect the user back to the home page
  res.status(200).redirect('http://localhost:5173');
};

exports.googleAuthHandler = async (req, res) => {
  try {
    //Get google code from request object
    const code = req.query.code;

    //Get google ID and token from the code we got back
    const googleId = await getGoogleTokens(code);

    //Decode token to get user information (email, name and maybe photo)
    const userData = jwt.decode(googleId);

    //Check if user exist: True -> Login user | False -> Create new user
    checkSignUser(userData, res);
  } catch (err) {
    console.log(err);
  }
};

exports.facebookAuthHandler = async (req, res) => {
  try {
    //Get code sent by Facebook
    const code = req.query.code;

    //Get user information from Facebook
    const userInfo = await getFacebookTokens(code);

    //Check if user exist: True -> Login user | False -> Create new user
    checkSignUser(userInfo, res);
  } catch (err) {
    console.log(err);
  }
};

exports.logout = (req, res) => {
  const cookieOptions = {
    expires: new Date(Date.now() - 10 * 1000),
    httpOnly: true,
    // secure: true,
    sameSite: 'lax',
  };

  res.cookie('jwt', null, cookieOptions);

  res.status(200).json({
    status: 'success',
    message: 'Logged out correctly.',
  });
};

exports.protect = async (req, res, next) => {
  //Get JWT token
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token) {
    return res
      .status(401)
      .json({ status: 'failed', message: 'You are not logged in.' });
  }

  //Get user ID stored in token
  const decodedId = jwt.verify(token, process.env.JWT_SECRET).id;

  //Retrieve user and validate
  const authUser = await User.findById(decodedId);

  if (!authUser)
    return res
      .status(404)
      .json({ status: 'failed', message: 'User does not exist anymore.' });

  req.user = authUser;

  next();
};
