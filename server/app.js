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

const authController = require('./controllers/authController');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(cookieParser());
app.use(
  cors({
    origin: '*',
  })
);
app.set('trust proxy', 1);
app.use(helmet());
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

app.use('/api/auth', authRouter);
app.use('/api/swipes', swipesRouter);
app.use('/api/user', userRouter);
app.use('/api/matches', matchesRouter);

module.exports = app;
