const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/userModel');
const LikesPack = require('../models/likePackModel');

exports.createCheckoutSession = async (req, res) => {
  //Getting package info from DB
  const package = await LikesPack.findOne({
    likesAmount: req.body.likesPackage,
  });

  if (!package) {
    return res.status(404).json({
      status: 'failed',
      message: 'Please provide a valid likes package.',
    });
  }

  const { likesAmount, name, price, description } = package;

  try {
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
      success_url: 'http://localhost:5173',
      cancel_url: 'http://localhost:5173',
      client_reference_id: likesAmount,
      customer_email: req.user.email,
    });

    //   res.redirect(303, session.url);
    res.status(200).json({ link: session.url });
  } catch (err) {
    res
      .status(400)
      .json({ status: 'failed', message: 'Something went wrong.' });
  }
};

const addLikes = async event => {
  try {
    await User.findOneAndUpdate(
      { email: event.customer_email },
      { $inc: { extraLikes: event.client_reference_id } }
    );
  } catch (err) {
    //Handle properly errors in case this fails, so users receive the likes eventually
    console.log(err);
  }
};

exports.webHookCheckout = async (req, res) => {
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
    return res
      .status(400)
      .json({ status: 'failed', message: `Webook error: ${err}` });
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
};
