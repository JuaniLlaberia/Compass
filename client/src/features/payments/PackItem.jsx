import { formatPrice } from '../../utils/formatPrice';
import { useCreateCheckout } from './useCreateCheckout';

const PackItem = ({ id, label, price, special }) => {
  const { checkout } = useCreateCheckout();

  return (
    <li
      className={`border relative flex items-center justify-between px-5 py-4 rounded-lg shadow-md active:bg-light-bg-2 focus:bg-light-bg-2 dark:active:bg-dark-bg-2 dark:focus:bg-dark-bg-2 cursor-pointer ${
        special
          ? 'border-secondary-1 after:-top-4 mt-4 after:content-["Popular"] after:left-3 after:px-3 after:rounded-lg after:py-1 after:text-sm after:text-dark-text-1 after:font-semibold after:absolute after:bg-secondary-1'
          : 'border-light-border-1 dark:border-dark-border-1'
      }`}
      onClick={() => checkout(id)}
    >
      <div className='flex items-center gap-2'>
        <div className='h-10 w-10 rounded-full bg-secondary-1'></div>
        <h2 className='font-semibold text-light-text-1 dark:text-dark-text-1'>
          {label}
        </h2>
      </div>
      <button className='bg-secondary-1 px-3 py-1 rounded-full text-dark-text-1 font-semibold'>
        {formatPrice(price / 100)}
      </button>
    </li>
  );
};

export default PackItem;
