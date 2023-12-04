import { IoWarning } from 'react-icons/io5';

const CardsError = () => {
  return (
    <section className='flex flex-col items-center justify-center px-5 h-full'>
      <h1 className='flex items-center gap-2 font-semibold text-light-text-1 dark:text-dark-text-1 mb-3'>
        <span>
          <IoWarning
            size={25}
            color='orange'
          />{' '}
        </span>
        Something went wrong
      </h1>
      <p className='text-sm text-light-text-2 dark:text-dark-text-2 mb-8'>
        We are having some issues retrieving users at the momment. Please try
        reloading the page or try later. We apologies for the inconviniences.
      </p>
    </section>
  );
};

export default CardsError;
