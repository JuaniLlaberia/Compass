const getGoogleAuthUrl = () => {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

  const options = {
    redirect_uri: import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT_URL,
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  };

  const urlSearchParams = new URLSearchParams(options);

  return `${rootUrl}?${urlSearchParams.toString()}`;
};

const getFacebookAuthUrl = () => {
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

function App() {
  return (
    <>
      <a
        className='text-red-700'
        href={getGoogleAuthUrl()}
      >
        Login
      </a>
      <a
        className='text-blue-700'
        href={getFacebookAuthUrl()}
      >
        Login
      </a>
    </>
  );
}

export default App;
