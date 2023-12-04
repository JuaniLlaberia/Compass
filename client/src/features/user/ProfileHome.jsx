import defaultImg from '../../../public/default.jpg';
import ProfileBtns from './ProfileBtns';
import LikesSection from './LikesSection';
import { useAuthContext } from '../../context/AuthContext';

const ProfileHome = () => {
  const { user } = useAuthContext();
  const { fullName, category, profileImage, likes, extraLikes } = user.data;

  return (
    <>
      <header className='flex flex-col justify-center items-center mt-4'>
        <img
          src={defaultImg}
          className='h-36 w-36 rounded-full'
        />
        <h1 className='text-lg text-light-text-1 dark:text-dark-text-1'>
          {fullName}
        </h1>
        <h2 className='text-light-text-2 dark:text-dark-text-2 font-semibold'>
          {category.join(', ')}
        </h2>
      </header>
      <ProfileBtns />
      <LikesSection
        likes={likes}
        extraLikes={extraLikes}
      />
    </>
  );
};

export default ProfileHome;
