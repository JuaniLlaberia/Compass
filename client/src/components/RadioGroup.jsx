import CustomRadioSmall from './CustomRadioSmall';

const RadioGroup = ({ options, fn }) => {
  return (
    <ul className='flex gap-3'>
      {options.map(option => (
        <CustomRadioSmall
          key={option}
          value={option}
          label={option}
          register={fn}
        />
      ))}
    </ul>
  );
};

export default RadioGroup;
