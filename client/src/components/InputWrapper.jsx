const InputWrapper = ({ label, id, error, children }) => {
  return (
    <div className='relative bg-inherit mb-6 md:w-full lg:mb-8'>
      {children}
      <label
        htmlFor={id}
        className='absolute cursor-text left-0 -top-5 text-sm lg:text-base lg:-top-6 text-light-text-2 dark:text-dark-text-2 bg-inherit mx-2 peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-focus:-top-5 lg:peer-focus:-top-6 peer-focus:text-secondary-1 peer-focus:text-sm transition-all'
      >
        {label}
      </label>
      {error && <p className='text-sm px-2 text-red-500'>{error}</p>}
    </div>
  );
};

export default InputWrapper;
