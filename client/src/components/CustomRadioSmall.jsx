const CustomRadioSmall = ({ label, value, register }) => {
  return (
    <li className='w-full'>
      <input
        id={value}
        className='hidden peer'
        type='radio'
        value={value}
        {...register}
      />
      <label
        htmlFor={value}
        className='mt-1 shadow-sm px-4 py-1 text-light-text-1 dark:text-dark-text-1 capitalize border border-light-border-1 dark:border-dark-border-1 rounded-lg flex justify-center items-center peer-checked:border-secondary-1 md:hover:bg-light-bg-2 active:bg-light-bg-2 dark:md:hover:bg-dark-bg-2 dark:active:bg-dark-bg-2 cursor-pointer'
      >
        {label}
      </label>
    </li>
  );
};

export default CustomRadioSmall;
