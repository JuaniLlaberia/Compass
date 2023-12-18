import { ClipLoader } from 'react-spinners';

const CardsLoader = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-3 text-light-text-1 dark:text-dark-text-1'>
      <ClipLoader size={50} color='gray' />
      <h1 className='font-semibold text-light-text-2 dark:text-dark-text-2'>
        Searching users
      </h1>
    </div>
  );
};

export default CardsLoader;
