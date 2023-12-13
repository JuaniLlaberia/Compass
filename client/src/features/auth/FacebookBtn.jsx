import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { getFacebookAuthUrl } from '../../utils/getFacebookAuthUrl';

const FacebookBtn = () => {
  return (
    <Link
      to={getFacebookAuthUrl()}
      className='flex justify-center items-center gap-2 bg-light-bg-1 active:bg-light-bg-2 md:hover:bg-light-bg-2 shadow-sm border rounded-lg py-3 my-3 lg:py-5 font-semibold cursor-pointer transition-colors'
    >
      <FaFacebook size={30} fill='#3b5998' />
      <span className='lg:text-xl'>Continue with Facebook</span>
    </Link>
  );
};

export default FacebookBtn;
