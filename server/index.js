const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Database is now connected.'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`App running in port ${port} in ${process.env.NODE_ENV}`)
);
