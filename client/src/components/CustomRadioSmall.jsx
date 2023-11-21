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
        className='mt-1 shadow-sm px-4 py-1 capitalize border rounded-lg flex justify-center items-center peer-checked:border-secondary-1 md:hover:bg-light-bg-2 active:bg-light-bg-2'
      >
        {label}
      </label>
    </li>
  );
};

export default CustomRadioSmall;