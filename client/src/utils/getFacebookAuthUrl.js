export const getFacebookAuthUrl = () => {
  const rootUrl = 'https://www.facebook.com/v12.0/dialog/oauth';

  const options = {
    redirect_uri: import.meta.env.VITE_FACEBOOK_OAUTH_REDIRECT_URL,
    client_id: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    scope: ['email'].join(' '),
  };

  const urlSearchParams = new URLSearchParams(options);

  return `${rootUrl}?${urlSearchParams.toString()}`;
};
