import { IoWarning } from 'react-icons/io5';

const CardsError = () => {
  return (
    <section className='flex flex-col items-center justify-center px-5 h-full'>
      <h1 className='flex items-center gap-2 font-semibold text-light-text-1 dark:text-dark-text-1 mb-3 lg:text-xl xl:text-2xl'>
        <span className='text-3xl lg:text-4xl'>
          <IoWarning color='orange' />{' '}
        </span>
        Something went wrong
      </h1>
      <p className='text-sm text-light-text-2 dark:text-dark-text-2 mb-8 lg:text-base xl:text-lg'>
        We are having some issues retrieving users at the momment. Please try
        reloading the page or try later. We apologies for the inconviniences.
      </p>
    </section>
  );
};

export default CardsError;
