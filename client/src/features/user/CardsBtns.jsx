import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5';

const CardsBtns = ({ swipeUserLeft, swipeUserRight }) => {
  return (
    <div className='fixed bottom-20 left-0 flex justify-center items-center gap-10 w-full lg:gap-20'>
      <button
        onClick={swipeUserRight}
        className='w-16 h-16 lg:w-24 lg:h-24 text-3xl lg:text-4xl text-green-400 shadow-md md:hover:bg-green-50 active:bg-green-200 border border-light-border-1 dark:border-dark-border-1 rounded-full flex items-center justify-center transition-all duration-300'
      >
        <IoCheckmarkSharp />
      </button>
      <button
        onClick={swipeUserLeft}
        className='w-16 h-16 lg:w-24 lg:h-24 text-3xl lg:text-4xl text-red-400 shadow-md md:hover:bg-red-50 active:bg-red-200 border border-light-border-1 dark:border-dark-border-1 rounded-full flex items-center justify-center transition-all duration-300'
      >
        <IoCloseSharp />
      </button>
    </div>
  );
};

export default CardsBtns;
