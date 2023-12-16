import LikesSection from '../user/LikesSection';
import { useAuthContext } from '../../context/AuthContext';

const SettingsLikes = () => {
  const { user } = useAuthContext();
  const { likes, extraLikes } = user.data;

  return (
    <>
      <h4 className='my-4 text-light-text-1 dark:text-dark-text-1 font-semibold text-xl lg:text-2xl'>
        Likes Information
      </h4>
      <p className='mb-4 text-light-text-2 dark:text-dark-text-2'>
        Every 24hs your regular likes a reseted to X. In addition you can
        purchase extra likes in order to keep swiping ones your regular likes
        are empty.
      </p>
      <h5 className='text-lg font-semibold text-light-text-1 dark:text-dark-text-1'>
        Your likes
      </h5>
      <LikesSection
        likes={likes}
        extraLikes={extraLikes}
      />
    </>
  );
};

export default SettingsLikes;
