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
          src={profileImage}
          className='h-32 w-32 rounded-full bg-light-bg-3 dark:bg-dark-bg-3'
        />
        <h1 className='text-lg text-light-text-1 dark:text-dark-text-1'>
          {fullName}
        </h1>
        <ul className='flex justify-center gap-2 flex-wrap mt-2'>
          {category.map(cat => (
            <li
              className='text-light-text-2 dark:text-dark-text-2 border border-light-border-1 dark:border-dark-border-1 rounded-full text-sm px-3'
              key={cat}
            >
              {cat}
            </li>
          ))}
        </ul>
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
