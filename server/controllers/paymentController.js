const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/userModel');
const LikesPack = require('../models/likePackModel');
const catchErrorAsync = require('../utils/catchAsyncErrors');
const CustomError = require('../utils/error');

exports.createCheckoutSession = catchErrorAsync(async (req, res, next) => {
  //Getting package info from DB
  const package = await LikesPack.findById(req.body.packageId);

  if (!package)
    return next(new CustomError('Please provide a valid likes package', 404));

  const { likesAmount, name, price, description } = package;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          unit_amount: price,
          currency: 'usd',
          product_data: {
            name,
            description,
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:5173/profile',
    cancel_url: 'http://localhost:5173/profile',
    client_reference_id: likesAmount,
    customer_email: req.user.email,
  });

  res.status(200).json({ link: session.url });
});

const addLikes = catchErrorAsync(async event => {
  await User.findOneAndUpdate(
    { email: event.customer_email },
    { $inc: { extraLikes: event.client_reference_id } }
  );
});

exports.webHookCheckout = catchErrorAsync(async (req, res, next) => {
  const payload = req.body;
  const signature = req.headers['stripe-signature'];

  //Use the real SECRET when API is hosted
  const secret =
    'whsec_513344b90abf7fb9abfdcf418e3f7c803b97f7e2099b1a5657cd9158bb9e666a';

  //Verify the stripe signature
  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    return next(new CustomError(err.message, 400));
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      //In development add likes as test mode will always be this type
      if (process.env.NODE_ENV === 'development') addLikes(event.data.object);
      //When paid add likes
      if (event.status === 'paid') addLikes(event.data.object);
      break;
    }

    case 'checkout.session.async_payment_succeded': {
      //Add bought likes
      addLikes(event.data.object);
      break;
    }

    case 'checkout.session.async_payment_failed': {
      //Perform some action to indicate the error/fail of the transaction
      break;
    }
  }

  res.status(200).json({
    status: 'success',
    message: 'Payment received. You will receive your likes now.',
  });
});

exports.getPackages = catchErrorAsync(async (req, res) => {
  const packages = await LikesPack.find();

  res.status(200).json({
    status: 'success',
    data: packages,
  });
});
