import { useForm } from 'react-hook-form';
import RadioGroup from '../../components/RadioGroup';
import { useThemeContext } from '../../context/ThemeContext';

const SettingsTheme = () => {
  const { toggleTheme, theme } = useThemeContext();
  const { register } = useForm({
    defaultValues: { theme },
  });
  return (
    <>
      <h4 className='my-4 text-light-text-1 dark:text-dark-text-1 font-semibold text-xl lg:text-2xl'>
        Theme
      </h4>
      <p className='mb-4 text-light-text-2 dark:text-dark-text-2'>
        Change how the application looks to suit your taste.
      </p>
      <RadioGroup
        options={['Light', 'Dark']}
        fn={register('theme', {
          onChange: val => {
            toggleTheme(val.target.value);
          },
        })}
      />
    </>
  );
};

export default SettingsTheme;
