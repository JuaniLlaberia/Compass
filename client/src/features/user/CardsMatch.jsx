import { CardsLink } from '../../components/CardsLink';
import { useAuthContext } from '../../context/AuthContext';

const CardsMatch = ({ matchedUser }) => {
  const { user } = useAuthContext();

  return (
    <section className='px-2'>
      <h2 className='text-xl font-semibold text-center text-light-text-1 dark:text-dark-text-1 md:mb-10'>
        New match
      </h2>
      <div className='flex justify-center gap-2 my-4 mb-12'>
        <div className='relative'>
          <img
            draggable={false}
            loading='lazy'
            alt='user profile photo'
            src={user.data.profileImage}
            className='h-24 w-24 bg-light-bg-3 rounded-full lg:h-28 lg:w-28'
          />
        </div>
        <div className='relative -ml-[32px]'>
          <img
            draggable={false}
            loading='lazy'
            alt='matched user profile photo'
            src={matchedUser?.image}
            className='h-24 w-24 bg-light-bg-3 rounded-full lg:h-28 lg:w-28'
          />
        </div>
      </div>
      <p className='mt-3 mb-8 text-light-text-2 dark:text-dark-text-2 lg:text-lg'>
        Congratulations! You have matched with {matchedUser?.fullName}. Good
        luck!
      </p>
      <CardsLink link='/chats'>Go to chats</CardsLink>
    </section>
  );
};

export default CardsMatch;
