import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5';

const CardsBtns = ({ swipeUserLeft, swipeUserRight }) => {
  return (
    <div className='fixed bottom-20 left-0 flex justify-center items-center gap-10 w-full'>
      <button
        onClick={swipeUserRight}
        className='w-16 h-16 text-green-400 shadow-md md:hover:bg-green-50 active:bg-green-200 border border-light-border-1 dark:border-dark-border-1 rounded-full flex items-center justify-center transition-all duration-300'
      >
        <IoCheckmarkSharp size={25} />
      </button>
      <button
        onClick={swipeUserLeft}
        className='w-16 h-16 text-red-400 shadow-md md:hover:bg-red-50 active:bg-red-200 border border-light-border-1 dark:border-dark-border-1 rounded-full flex items-center justify-center transition-all duration-300'
      >
        <IoCloseSharp size={25} />
      </button>
    </div>
  );
};

export default CardsBtns;
