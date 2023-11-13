const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const compression = require('compression');

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

module.exports = app;
