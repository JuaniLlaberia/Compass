const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');
const swipesRouter = require('./routes/swipesRoute');
const matchesRouter = require('./routes/matchRoute');
const paymentRouter = require('./routes/paymentRoute');
const chatRouter = require('./routes/chatsRoute');

const authController = require('./controllers/authController');
const paymentController = require('./controllers/paymentController');
const errorController = require('./controllers/errorsController');
const CustomError = require('./utils/error');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(cookieParser());
app.use(
  cors({
    origin: 'https://compass-alpha.vercel.app',
    credentials: true,
  })
);
app.set('trust proxy', 1);
app.use(helmet());

app.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  paymentController.webHookCheckout
);

app.use(
  express.json({
    limit: '10kb',
  })
);

app.use(mongoSanitize());
app.use(compression());

//Routes
app.get('/api/sessions/oauth/google', authController.googleAuthHandler);
app.get('/api/sessions/oauth/facebook', authController.facebookAuthHandler);

app.use('/api/payment', paymentRouter);
app.use('/api/auth', authRouter);
app.use('/api/swipes', swipesRouter);
app.use('/api/user', userRouter);
app.use('/api/matches', matchesRouter);
app.use('/api/chats', chatRouter);

app.use('*', (req, res, next) => {
  next(new CustomError('Endpoint not found.', 404));
});

app.use(errorController);

module.exports = app;
