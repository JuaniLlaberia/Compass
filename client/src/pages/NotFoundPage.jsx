import { CardsLink } from '../components/CardsLink';

const NotFoundPage = () => {
  return (
    <section className='flex flex-col items-center justify-center h-full px-10 pb-16'>
      <h1 className='text-center text-6xl font-semibold text-secondary-1'>
        404
      </h1>
      <h2 className='text-center text-xl font-semibold text-light-text-1 dark:text-dark-text-1 mb-6'>
        Page Not Found
      </h2>
      <CardsLink link='/app'>Go Home</CardsLink>
    </section>
  );
};

export default NotFoundPage;
