import { IoImage } from 'react-icons/io5';
import ProfileBtns from './ProfileBtns';
import Modal from '../../components/Modal';
import UpdateImgModal from './UpdateImgModal';
import { useAuthContext } from '../../context/AuthContext';

const ProfileHome = () => {
  const { user } = useAuthContext();
  const { fullName, category, profileImage } = user.data;

  return (
    <>
      <header>
        <h1 className='font-semibold text-lg p-4 text-light-text-1 dark:text-dark-text-1'>
          My Account
        </h1>
      </header>
      <section className='flex flex-col justify-center items-center mt-2'>
        <div className='relative'>
          <img
            src={profileImage}
            className='h-32 w-32 xl:h-44 xl:w-44 rounded-full bg-light-bg-3 dark:bg-dark-bg-3'
          />
          <Modal>
            <Modal.Open opens='update-image'>
              <button className='absolute -bottom-1 -right-1 text-light-text-1 dark:text-dark-text-1 bg-light-bg-1 dark:bg-dark-bg-1 rounded-full p-1.5 border border-light-border-1  dark:border-dark-border-1'>
                <IoImage size={25} />
              </button>
            </Modal.Open>
            <Modal.Window windowName='update-image'>
              <UpdateImgModal />
            </Modal.Window>
          </Modal>
        </div>
        <h1 className='text-lg text-light-text-1 dark:text-dark-text-1 font-semibold xl:text-2xl mt-3'>
          {fullName}
        </h1>
        <ul className='flex justify-center gap-2 flex-wrap px-6 mt-2'>
          {category.map(cat => (
            <li
              className='text-secondary-1 font-semibold border border-light-border-1 dark:border-dark-border-1 rounded-full text-sm px-3 py-0.5 md:text-base xl:text-lg xl:px-5'
              key={cat}
            >
              {cat}
            </li>
          ))}
        </ul>
      </section>
      <section className='flex justify-start mt-10'>
        <ProfileBtns />
      </section>
    </>
  );
};

export default ProfileHome;
