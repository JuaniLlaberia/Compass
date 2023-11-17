const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/userModel');

exports.createCheckoutSession = async (req, res) => {
  //This data should be store in the DB so nobody can modify it

  const { productName, productPrice, likesAmount } = req.body;

  const userEmail = req.user.email;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          unit_amount: productPrice,
          currency: 'usd',
          product_data: {
            name: productName,
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:5173',
    cancel_url: 'http://localhost:5173',
    client_reference_id: likesAmount,
    customer_email: userEmail,
  });

  //   res.redirect(303, session.url);
  res.status(200).json({ link: session.url });
};

const addLikes = async event => {
  try {
    //Get the likes package from the ID and use that amount

    await User.findOneAndUpdate(
      { email: event.customer_email },
      { $inc: { extraLikes: 25 } }
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
      //The payment could be pending in production so we need to mark it as pending until it gets paid
      //And handle the wait
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
