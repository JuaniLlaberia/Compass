import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import Modal from '../../components/Modal';
import { useDeleteMatch } from './useDeleteMatch';

const CancelMatchModal = () => {
  const { cancelMatch, isLoading } = useDeleteMatch();

  return (
    <Modal>
      <Modal.Open opens='cancel-modal'>
        <button className='text-light-text-2 dark:text-dark-text-2 lg:text-xl xl:text-2xl'>
          <IoEllipsisVerticalSharp />
        </button>
      </Modal.Open>
      <Modal.Window windowName='cancel-modal'>
        <section className='flex flex-col'>
          <h1 className='text-lg text-center text-light-text-2 dark:text-dark-text-2 pb-2 border-b border-light-border-1 dark:border-dark-border-1 xl:text-xl'>
            Details
          </h1>
          <button
            aria-label='redirect'
            disabled={isLoading}
            className='w-full font-semibold text-red-500 py-3 border-b border-light-border-1 dark:border-dark-border-1 xl:text-xl xl:py-4'
          >
            Report
          </button>
          <button
            aria-label='delete match'
            disabled={isLoading}
            className='w-full font-semibold text-red-500 pt-3 xl:pt-4 xl:text-xl'
            onClick={cancelMatch}
          >
            Cancel Match
          </button>
        </section>
      </Modal.Window>
    </Modal>
  );
};

export default CancelMatchModal;
