import { useGetPackages } from '../features/payments/useGetPackages';
import { useCreateCheckout } from '../features/payments/useCreateCheckout';

const PacksModal = () => {
  const { packages, isLoading } = useGetPackages();
  const { checkout } = useCreateCheckout();

  if (isLoading) return <p>loading</p>;

  return (
    <>
      <h1 className='text-xl mb-4 px-2'>All packages</h1>
      <ul className='flex flex-col gap-3'>
        {packages.data.map(pack => (
          <li
            key={pack._id}
            className='border px-5 py-3 rounded-lg shadow-md'
            onClick={() => checkout(pack._id)}
          >
            {pack.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PacksModal;
