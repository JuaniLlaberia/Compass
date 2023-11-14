const { default: axios } = require('axios');

const getFacebookTokens = async code => {
  try {
    //Get access token with the code
    const accessTokenUrl = `https://graph.facebook.com/v12.0/oauth/access_token?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.FACEBOOK_OAUTH_REDIRECT_URL}&client_secret=${process.env.FACEBOOK_CLIENT_SECRET}&code=${code}`;
    const facebookId = await axios.get(accessTokenUrl);

    //Get user information from facebook
    const userInfoUrl = `https://graph.facebook.com/v12.0/me?fields=id,name,email&access_token=${facebookId.data.access_token}`;
    const userInfo = await axios.get(userInfoUrl);

    return userInfo.data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getFacebookTokens;
