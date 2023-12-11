import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { getGoogleAuthUrl } from '../../utils/getGoogleAuthUrl';

const GoogleBtn = () => {
  return (
    <Link
      to={getGoogleAuthUrl()}
      className='flex justify-center items-center gap-2 bg-light-bg-1 active:bg-light-bg-2 md:hover:bg-light-bg-2 shadow-sm border rounded-lg py-3 lg:py-5 my-3 font-semibold cursor-pointer transition-colors'
    >
      <FcGoogle size={30} />
      <span className='lg:text-xl'>Continue with Google</span>
    </Link>
  );
};

export default GoogleBtn;
