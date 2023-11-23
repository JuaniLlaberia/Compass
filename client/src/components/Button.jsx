import { ClipLoader } from 'react-spinners';

const Button = ({ children, isLoading, ...props }) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className='flex items-center justify-center min-w-[80px] px-6 py-2 bg-dark-bg-2 text-dark-text-1 rounded-md active:bg-[#3b3939] md:hover:bg-[#3b3939] transition-color disabled:cursor-not-allowed'
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
