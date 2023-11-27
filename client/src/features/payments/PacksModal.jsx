import { useGetPackages } from './useGetPackages';
import PackItem from './PackItem';

const PacksModal = () => {
  const { packages, isLoading } = useGetPackages();

  if (isLoading) return <p>loading</p>;

  return (
    <>
      <h1 className='text-xl mb-4 px-2 font-semibold'>All packages</h1>
      <ul className='flex flex-col gap-3'>
        {packages.data.map((pack, i) => (
          <PackItem
            key={pack._id}
            id={pack._id}
            price={pack.price}
            special={i === 1}
            label={pack.name}
          />
        ))}
      </ul>
      <p className='mt-5 text-sm text-light-text-2 px-2'>
        All extra like packages have no expiration date and they work exactly
        the same as regular likes. All payments are handle by Stripe©.
      </p>
    </>
  );
};

export default PacksModal;
