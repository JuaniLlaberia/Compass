const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
  //This data should be store in the DB so nobody can modify it

  const { productName, productPrice, likesAmount } = req.body;

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
    //Values to the webhook (check if I can send anything)
    client_reference_id: likesAmount,
    client_id: req.user._id,
  });

  //   res.redirect(303, session.url);
  res.status(200).json({ link: session.url });
};

exports.webHookCheckout = async (req, res) => {
  //Verify the stripe signature
  let event;

  console.log(req.body);

  //   try {
  //     event = stripe.webhooks.constructEvent(
  //       req.body,
  //       req.headers['stripe-signature'],
  //       process.env.STRIPE_WEBHOOK_SECRET //ADD When we have public endpoint
  //     );
  //   } catch (err) {}

  if (event.type === 'checkout.session.completed') {
    //Add likes to user
    console.log('completed');
  }

  res.status(200).json({
    status: 'success',
    message: 'Payment received. You will receive your likes now.',
  });
};
