import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import Modal from '../../components/Modal';
import { useDeleteMatch } from './useDeleteMatch';

const CancelMatchModal = () => {
  const { cancelMatch, isLoading } = useDeleteMatch();

  return (
    <Modal>
      <Modal.Open opens='cancel-modal'>
        <button className='text-light-text-2 dark:text-dark-text-2'>
          <IoEllipsisVerticalSharp />
        </button>
      </Modal.Open>
      <Modal.Window windowName='cancel-modal'>
        <section className='flex flex-col'>
          <h1 className='text-lg text-center text-light-text-2 dark:text-dark-text-2 pb-2 border-b border-light-border-1 dark:border-dark-border-1'>
            Details
          </h1>
          <button
            disabled={isLoading}
            className='w-full font-semibold text-red-500 py-3 border-b border-light-border-1 dark:border-dark-border-1'
          >
            Report
          </button>
          <button
            disabled={isLoading}
            className='w-full font-semibold text-red-500 pt-3'
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
