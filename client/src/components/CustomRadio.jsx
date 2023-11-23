const CustomRadio = ({ label, icon, id, value, register }) => {
  return (
    <li>
      <input
        id={id}
        type='radio'
        value={value}
        {...register}
        className='hidden peer'
      />
      <label
        htmlFor={id}
        className='w-full text-light-text-1 dark:text-dark-text-1 bg-light-bg-1 dark:bg-dark-bg-1 p-5 border-2 rounded-xl active:bg-light-bg-2 dark:active:bg-dark-bg-2 flex gap-2 flex-col justify-center items-center peer-checked:border-secondary-1 dark:border-dark-text-2 md:hover:bg-light-bg-2 dark:md:hover:bg-dark-bg-2 cursor-pointer'
      >
        {icon}
        <span>{label}</span>
      </label>
    </li>
  );
};

export default CustomRadio;
