import { motion } from 'framer-motion';

const CardsPopUp = ({ children, onClose }) => {
  return (
    <>
      <motion.div
        initial={{ y: '-100%', x: '-50%', opacity: 0, scale: 0.85 }}
        animate={{ y: '-40%', x: '-50%', opacity: 1, scale: 1 }}
        className='bg-light-bg-1 text-light-text-1 dark:bg-dark-bg-1 dark:text-dark-text-1 fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] w-[50vw] min-w-[325px] max-w-[650px] p-3 rounded-lg min-h-[100px] z-[110] shadow-md'
      >
        {children}
      </motion.div>
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed top-0 left-0 h-full w-full z-[100] bg-[#88888815] backdrop-blur-[1px]'
      ></motion.div>
    </>
  );
};

export default CardsPopUp;
