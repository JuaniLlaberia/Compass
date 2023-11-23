import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className='bg-secondary-1 w-full h-14 flex justify-center items-center'>
      <Link
        to='/app'
        className='font-bold'
      >
        Job Swipe App
      </Link>
    </header>
  );
};

export default MainHeader;
