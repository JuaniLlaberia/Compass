const { default: axios } = require('axios');
const jwt = require('jsonwebtoken');
const qs = require('querystring');

exports.googleAuthHandler = async (req, res) => {
  //Get google code from request object
  const code = req.query.code;

  //Get google ID and token from the code we got back
  const url = 'https://oauth2.googleapis.com/token';
  const values = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL,
    grant_type: 'authorization_code',
  };

  try {
    const res = await axios.post(url, qs.stringify(values), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    //Decode token to get user information (email, name and maybe photo)
    const userData = jwt.decode(res.data.id_token);

    //CHECK iss and aud -> to verify!

    console.log(userData.name);
  } catch (err) {
    // console.log(err.message);
    console.log(err);
  }

  //Check if user already exist or create a new one in the DB

  //Create JWT token for authorization and store it in the cookies.

  //Redirect the user back to the client (Or see how to implement this process without having to go to the back (visually))

  res.status(200).json({
    msg: 'Auth',
  });
};
