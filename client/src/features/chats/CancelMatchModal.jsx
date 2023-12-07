import { useState } from 'react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import Modal from '../../components/Modal';

const CancelMatchModal = () => {
  return (
    <Modal>
      <Modal.Open opens='cancel-modal'>
        <button>
          <IoEllipsisVerticalSharp />
        </button>
      </Modal.Open>
      <Modal.Window windowName='cancel-modal'>
        <section className='flex flex-col'>
          <h1 className='text-lg text-center text-light-text-2 dark:text-dark-text-2 mb-6'></h1>
          <button className='w-full font-semibold text-red-500  pt-3'>
            Cancel Match
          </button>
        </section>
      </Modal.Window>
    </Modal>
  );
};

export default CancelMatchModal;
