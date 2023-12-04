import { ClipLoader } from 'react-spinners';

const FullScreenLoader = () => {
  return (
    <main className='w-full h-[100dvh] bg-light-bg-1 dark:bg-dark-bg-1 text-light-text-1 dark:text-dark-text-1 flex justify-center items-center'>
      <ClipLoader size={50} />
    </main>
  );
};

export default FullScreenLoader;
