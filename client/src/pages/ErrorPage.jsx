import { IoWarning, IoReload } from 'react-icons/io5';
import Button from '../components/Button';

const ErrorPage = () => {
  return (
    <main className='flex flex-col items-center justify-center px-5 h-[100dvh] bg-light-bg-1 dark:bg-dark-bg-1 pb-16'>
      <h1 className='flex items-center gap-2 text-xl font-semibold text-light-text-1 dark:text-dark-text-1 mb-3'>
        <span>
          <IoWarning
            size={30}
            color='orange'
          />{' '}
        </span>
        Something went wrong
      </h1>
      <p className='text-sm text-light-text-2 dark:text-dark-text-2 mb-6'>
        An error has occured when loading the page. Please try reloading the
        page or come back later. We apologies for the inconviniences.
      </p>
      <Button
        aria-label='reload page'
        onClick={() => window.location.replace('/app')}
      >
        <IoReload
          size={18}
          className='mr-2'
        />{' '}
        Reload page
      </Button>
    </main>
  );
};

export default ErrorPage;
