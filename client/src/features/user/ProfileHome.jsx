import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import UserPreview from './UserPreview';
import ProfileHeader from './ProfileHeader';
import { useAuthContext } from '../../context/AuthContext';

const ProfileHome = () => {
  const { user } = useAuthContext();
  const [previewOpen, isPreviewOpen] = useState(false);

  return (
    <section className='flex h-full w-full'>
      <header className='md:hidden'>
        <ProfileHeader userData={user.data} />
        <button
          aria-label='open'
          className='absolute top-4 right-5 bg-secondary-1 text-dark-text-1 font-semibold py-1 px-3 rounded-xl'
          onClick={() => isPreviewOpen(true)}
        >
          Preview
        </button>
      </header>
      {previewOpen && (
        <motion.section
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.25 }}
          className='fixed w-full h-full bg-light-bg-1 dark:bg-dark-bg-1 overflow-y-auto pb-6 md:pb-24 md:hidden z-[100]'
        >
          <button
            aria-label='close'
            className='absolute top-2.5 right-2.5 text-light-text-1 dark:text-dark-text-1'
            onClick={() => isPreviewOpen(false)}
          >
            <IoClose size={26} />
          </button>
          <UserPreview userData={user.data} />
        </motion.section>
      )}
      <div className='hidden md:flex md:w-full md:pb-3'>
        <aside className='border-r border-light-border-1 dark:border-dark-border-1'>
          <ProfileHeader userData={user.data} />
        </aside>

        <section className='flex justify-center w-full h-full overflow-y-auto'>
          <UserPreview userData={user.data} />
        </section>
      </div>
    </section>
  );
};

export default ProfileHome;
