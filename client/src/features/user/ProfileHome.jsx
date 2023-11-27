import defaultImg from '../../../public/default.jpg';
import ProfileBtns from './ProfileBtns';
import Modal from '../../components/Modal';
import PacksModal from '../payments/PacksModal';
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
        <h1 className='text-lg text-light-text-1'>{fullName}</h1>
        <h2 className='text-light-text-2 font-semibold'>
          {category.join(', ')}
        </h2>
      </header>
      <ProfileBtns />
      <section className='mt-14 flex gap-4'>
        <Modal>
          <div className='relative w-full bg-light-bg-1 border shadow-md rounded-lg px-3 pt-6 pb-2'>
            <div className='absolute -top-7 left-[50%] translate-x-[-50%] h-14 w-14 bg-secondary-1 rounded-full'></div>
            <h1 className='mt-3 font-semibold text-center'>Regular likes</h1>
            <h2 className='mt-2 text-center'>
              You have <span className='font-semibold'>{likes}</span> left
            </h2>
            <h3 className='text-center mt-4'>23:05:20</h3>
          </div>
          <div className='relative w-full bg-light-bg-1 border shadow-md rounded-lg px-3 pt-6 pb-2'>
            <div className='absolute -top-7 left-[50%] translate-x-[-50%] h-14 w-14 bg-secondary-1 rounded-full'></div>
            <h1 className='mt-3 font-semibold text-center'>Extra likes</h1>
            <h2 className='mt-2 text-center'>
              You have <span className='font-semibold'>{extraLikes}</span> left
            </h2>
            <div className='flex justify-center'>
              <Modal.Open opens='packages-modal'>
                <button className='bg-secondary-1 px-5 py-1 rounded-full mt-4 text-dark-text-1 font-semibold'>
                  Get more
                </button>
              </Modal.Open>
            </div>
          </div>
          <Modal.Window windowName='packages-modal'>
            <PacksModal />
          </Modal.Window>
        </Modal>
      </section>
    </>
  );
};

export default ProfileHome;
