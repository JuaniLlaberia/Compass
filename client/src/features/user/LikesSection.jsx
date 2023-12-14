import Modal from '../../components/Modal';
import PacksModal from '../payments/PacksModal';
import heartExtra from '/heart_extra.svg';
import heart from '/heart_icon.svg';

const LikesSection = ({ likes, extraLikes }) => {
  return (
    <section className='mt-10 flex justify-center gap-4 px-4 pb-4'>
      <Modal>
        <div className='relative w-full bg-light-bg-1 dark:bg-dark-bg-1 border border-light-border-1 dark:border-dark-border-1 shadow-md rounded-lg px-3 pt-6 pb-2 lg:max-w-[20dvw] lg:min-w-[300px] lg:pb-4'>
          <img
            draggable={false}
            loading='lazy'
            alt='likes icon'
            className='absolute -top-8 left-[50%] translate-x-[-50%] h-16 w-16 border rounded-full p-3 bg-light-bg-1 dark:bg-dark-bg-1 border-light-border-1 dark:border-dark-border-1'
            src={heart}
          />
          <h1 className='mt-3 font-semibold text-center text-light-text-1 dark:text-dark-text-1 lg:text-lg'>
            Regular likes
          </h1>
          <h2 className='mt-2 text-center text-light-text-1 dark:text-dark-text-2 lg:text-lg xl:text-xl'>
            You have <span className='font-semibold'>{likes}</span> left
          </h2>
        </div>
        <div className='relative w-full bg-light-bg-1 dark:bg-dark-bg-1 border border-light-border-1 dark:border-dark-border-1 shadow-md rounded-lg px-3 pt-6 pb-2 lg:max-w-[20dvw] lg:min-w-[300px] lg:pb-4'>
          <img
            draggable={false}
            loading='lazy'
            alt='likes icon'
            className='absolute -top-8 left-[50%] translate-x-[-50%] h-16 w-16 border rounded-full p-3 bg-light-bg-1 dark:bg-dark-bg-1 border-light-border-1 dark:border-dark-border-1'
            src={heartExtra}
          />
          <h1 className='mt-3 font-semibold text-center text-light-text-1 dark:text-dark-text-1 lg:text-lg'>
            Extra likes
          </h1>
          <h2 className='mt-2 text-center text-light-text-1 dark:text-dark-text-2 lg:text-lg xl:text-xl'>
            You have <span className='font-semibold'>{extraLikes}</span> left
          </h2>
          <div className='flex justify-center lg:mt-3'>
            <Modal.Open opens='packages-modal'>
              <button className='bg-gradient px-5 py-1 rounded-full mt-4 text-dark-text-1 font-semibold lg:text-lg lg:py-2 lg:px-6 xl:text-xl'>
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
