const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const ws = require('ws');
const app = require('./app');
const jwt = require('jsonwebtoken');
const Message = require('./models/messageModel');

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Database is now connected.'));

const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
  console.log(`App running in port ${port} in ${process.env.NODE_ENV}`)
);

//Web sockets
const wss = new ws.WebSocketServer({ server });

wss.on('connection', (connection, req) => {
  console.log(`Web Socket connected`);

  connection.on('close', () => {
    console.log('Web Socket closed');
  });

  //////////////////////
  //Show online users//
  ////////////////////

  const cookies = req.headers.cookie;

  if (cookies) {
    //Check if we have a cookie 'JWT'
    const tokenCookie = cookies.split(';').find(str => str.startsWith('jwt='));
    if (tokenCookie) {
      //Extract user id from the jwt token
      const token = tokenCookie.split('=').at(1);
      const decodedId = jwt.verify(token, process.env.JWT_SECRET).id;

      connection.userId = decodedId;
    }
  }

  [...wss.clients].forEach(client => {
    client.send(
      JSON.stringify({
        online: [...wss.clients].map(c => c.userId),
      })
    );
  });

  ////////////////////////

  connection.on('message', async messageParam => {
    //Verify date
    const message = JSON.parse(messageParam.toString());
    //Create message in DB
    if (message.recipient && message.message) {
      const msg = await Message.create(message);

      [...wss.clients]
        .filter(c => c.userId === message.recipient)
        .forEach(c => c.send(JSON.stringify(msg)));
    }
    // if(message?.recipient )
    //DELETE MESSAGES AFTER X AMOUNT OF TIME???
    //IMPLEMENT REVERSE PAGINATION
    //ADD ONLINE STATUS OR NOT
    //CHECK CLOSING CONECTION AND DISCONECTING....
  });
});
