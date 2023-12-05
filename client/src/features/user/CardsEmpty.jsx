import { IoSearchSharp } from 'react-icons/io5';
import { CardsLink } from '../../components/CardsLink';

const CardsEmpty = () => {
  return (
    <section className='flex flex-col items-center justify-center px-5 h-full'>
      <h1 className='flex items-center gap-2 font-semibold text-light-text-1 dark:text-dark-text-1 mb-3'>
        <span className='text-secondary-1'>
          <IoSearchSharp size={25} />{' '}
        </span>
        You have seen them all
      </h1>
      <p className='text-sm text-light-text-2 dark:text-dark-text-2 mb-8'>
        There are no more users to show based on your search and filters. You
        can expand your search to keep swiping.
      </p>
      <CardsLink link='/profile'>Go to profile</CardsLink>
    </section>
  );
};

export default CardsEmpty;
