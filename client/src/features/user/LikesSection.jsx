import Modal from '../../components/Modal';
import PacksModal from '../payments/PacksModal';

const LikesSection = ({ likes, extraLikes }) => {
  return (
    <section className='mt-14 flex gap-4'>
      <Modal>
        <div className='relative w-full bg-light-bg-1 dark:bg-dark-bg-2 border border-light-border-1 dark:border-dark-border-1 shadow-md rounded-lg px-3 pt-6 pb-2'>
          <div className='absolute -top-7 left-[50%] translate-x-[-50%] h-14 w-14 bg-secondary-1 rounded-full'></div>
          <h1 className='mt-3 font-semibold text-center text-light-text-1 dark:text-dark-text-1'>
            Regular likes
          </h1>
          <h2 className='mt-2 text-center text-light-text-1 dark:text-dark-text-2'>
            You have <span className='font-semibold'>{likes}</span> left
          </h2>
        </div>
        <div className='relative w-full bg-light-bg-1 dark:bg-dark-bg-2 border border-light-border-1 dark:border-dark-border-1 shadow-md rounded-lg px-3 pt-6 pb-2'>
          <div className='absolute -top-7 left-[50%] translate-x-[-50%] h-14 w-14 bg-secondary-1 rounded-full'></div>
          <h1 className='mt-3 font-semibold text-center text-light-text-1 dark:text-dark-text-1'>
            Extra likes
          </h1>
          <h2 className='mt-2 text-center text-light-text-1 dark:text-dark-text-2'>
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
  );
};

export default LikesSection;
