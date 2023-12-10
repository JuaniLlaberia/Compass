import { useGetPackages } from './useGetPackages';
import PackItem from './PackItem';

const PacksModal = () => {
  const { packages, isLoading, error } = useGetPackages();

  return (
    <>
      <h1 className='text-xl mb-4 px-2 font-semibold'>All packages</h1>
      {isLoading ? (
        'Loading packages'
      ) : packages?.data && !error ? (
        <ul className='flex flex-col gap-3'>
          {packages?.data?.map((pack, i) => (
            <PackItem
              key={pack._id}
              id={pack._id}
              price={pack.price}
              special={i === 1}
              label={pack.name}
              image={pack.image}
            />
          ))}
        </ul>
      ) : (
        <p className='py-3 px-2'>
          Failed to load packages. Please try reloading the page. We apologies
          for the inconvenience.
        </p>
      )}
      <p className='mt-5 text-sm text-light-text-2 dark:text-dark-text-2 px-2'>
        All extra like packages have no expiration date and they work exactly
        the same as regular likes. All payments are handle by Stripe©.
      </p>
    </>
  );
};

export default PacksModal;
