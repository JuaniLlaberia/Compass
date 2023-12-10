import { CardsLink } from '../../components/CardsLink';
import { useAuthContext } from '../../context/AuthContext';

const CardsMatch = () => {
  const { user } = useAuthContext();

  return (
    <section className='px-2'>
      <h2 className='text-xl font-semibold text-center text-light-text-1 dark:text-dark-text-1'>
        New match
      </h2>
      <div className='relative flex justify-center my-4 mb-28'>
        <img
          src={user.data.profileImage}
          className='absolute left-[45%] h-24 w-24 bg-light-bg-3 rounded-full'
        />
        <img
          //   src={user.data.profileImage}
          className='absolute left-[25%] h-24 w-24 bg-light-bg-3 rounded-full'
        />
      </div>
      <p className='mt-3 mb-8 text-light-text-2 dark:text-dark-text-2'>
        Congratulations! You have matched with [USER]. Good luck!
      </p>
      <CardsLink link='/chats'>Go to chats</CardsLink>
    </section>
  );
};

export default CardsMatch;
