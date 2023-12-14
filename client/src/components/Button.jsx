import { ClipLoader } from 'react-spinners';

const Button = ({ children, isLoading, type, ...props }) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={`flex items-center justify-center min-w-[80px] px-6 py-2.5 bg-dark-bg-2 text-dark-text-1 rounded-md active:bg-[#3b3939] md:hover:bg-[#3b3939] dark:bg-light-bg-2 dark:text-light-text-1 dark:active:bg-light-bg-3 dark:md:hover:bg-light-bg-3 transition-color disabled:cursor-not-allowed ${
        type === 'danger'
          ? 'bg-red-500 active:bg-red-400 md:hover:bg-red-600 dark:bg-red-500 dark:active:bg-red-400 md:dark:hover:bg-red-600'
          : ''
      } lg:text-lg font-semibold`}
    >
      {isLoading && (
        <ClipLoader
          size={18}
          color='white'
        />
      )}
      {!isLoading && children}
    </button>
  );
};

export default Button;
