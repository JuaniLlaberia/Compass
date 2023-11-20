import { getGoogleAuthUrl } from '../utils/getGoogleAuthUrl';

const AuthPage = () => {
  return (
    <div className='text-black'>
      <a href={getGoogleAuthUrl()}>Login</a>
    </div>
  );
};

export default AuthPage;
