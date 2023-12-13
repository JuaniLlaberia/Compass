import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5';

const CardsBtns = ({ swipeUserLeft, swipeUserRight }) => {
  return (
    <div className='fixed bottom-20 left-0 flex justify-center items-center gap-10 w-full lg:gap-20'>
      <button
        aria-label='swipe user right (apply)'
        onClick={swipeUserRight}
        className='md:[&>span]:hover:scale-125 w-14 h-14 md:h-16 md:w-16 lg:w-20 lg:h-20 text-3xl lg:text-4xl bg-light-bg-1 dark:bg-dark-bg-2 text-green-400 shadow-md border border-light-border-1 dark:border-dark-border-1 rounded-2xl flex items-center justify-center transition-all duration-300'
      >
        <span className='transition-all'>
          <IoCheckmarkSharp />
        </span>
      </button>
      <button
        aria-label='swipe user left (reject)'
        onClick={swipeUserLeft}
        className='md:[&>span]:hover:scale-125 w-14 h-14 md:h-16 md:w-16 lg:w-20 lg:h-20 text-3xl lg:text-4xl bg-light-bg-1 dark:bg-dark-bg-2 text-red-400 shadow-md border border-light-border-1 dark:border-dark-border-1 rounded-2xl flex items-center justify-center transition-all duration-300'
      >
        <span className='transition-all'>
          <IoCloseSharp />
        </span>
      </button>
    </div>
  );
};

export default CardsBtns;
