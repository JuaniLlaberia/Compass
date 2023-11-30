const Input = ({ error, register, ...props }) => {
  return (
    <input
      className={`peer bg-transparent w-full rounded-lg p-2.5 text-light-text-1 dark:text-dark-text-1 mb-1 placeholder-transparent focus:outline-none border ${
        error ? 'border-red-500' : ''
      } focus:border-secondary-1 md:hover:bg-light-bg-2`}
      {...register}
      {...props}
    />
  );
};

export default Input;
