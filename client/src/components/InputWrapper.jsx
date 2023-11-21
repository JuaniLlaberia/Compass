const InputWrapper = ({ label, id, error, children }) => {
  return (
    <div className='relative bg-inherit mb-6'>
      {children}
      <label
        htmlFor={id}
        className='absolute cursor-text left-0 -top-5 text-sm text-light-text-2 bg-inherit mx-2 peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-focus:-top-5 peer-focus:text-secondary-1 peer-focus:text-sm transition-all'
      >
        {label}
      </label>
      {error && <p className='text-sm px-2 text-red-500'>ERROR</p>}
    </div>
  );
};

export default InputWrapper;
