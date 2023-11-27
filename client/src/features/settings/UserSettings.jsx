import { useForm } from 'react-hook-form';
import RadioGroup from '../../components/RadioGroup';
import Select from '../../components/Select';
import SettingsBtns from './SettingsBtns';
import { useThemeContext } from '../../context/ThemeContext';

const UserSettings = () => {
  const { toggleTheme, theme } = useThemeContext();
  const { register } = useForm({
    defaultValues: { theme },
  });

  return (
    <section className='relative h-full'>
      <h1 className='font-semibold border-b py-1 mb-2'>Theme</h1>
      <RadioGroup
        options={['Light', 'Dark', 'System']}
        fn={register('theme', {
          onChange: val => {
            toggleTheme(val.target.value);
          },
        })}
      />
      <h1 className='font-semibold border-b py-1 my-2'>Language</h1>
      <Select
        options={['English', 'Spanish']}
        selectedOptions={['Spanish']}
      />
      <SettingsBtns />
    </section>
  );
};

export default UserSettings;
