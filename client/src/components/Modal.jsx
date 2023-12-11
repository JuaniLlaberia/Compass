import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineXMark } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState('');

  const open = windowName => setIsOpen(windowName);
  const close = () => setIsOpen('');

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens }) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) });
};

const Window = ({ children, windowName }) => {
  const { isOpen, close } = useContext(ModalContext);

  if (isOpen !== windowName) return null;

  return createPortal(
    <>
      <motion.div
        initial={{ y: '-100%', x: '-50%', opacity: 0, scale: 0.85 }}
        animate={{ y: '-40%', x: '-50%', opacity: 1, scale: 1 }}
        className='bg-light-bg-1 text-light-text-1 dark:bg-dark-bg-1 dark:text-dark-text-1 fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] w-[50vw] min-w-[325px] max-w-[600px] p-3 rounded-lg min-h-[100px] z-[110] shadow-md'
      >
        <button
          className='absolute top-2.5 right-2.5 text-light-text-2 dark:text-dark-text-2'
          onClick={close}
        >
          <HiOutlineXMark size={25} />
        </button>
        <section className='mt-4'>
          {cloneElement(children, { onClose: close })}
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className='fixed top-0 left-0 h-full w-full z-[100] bg-[#a8a8a834] backdrop-blur-[1.5px]'
      ></motion.div>
    </>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
