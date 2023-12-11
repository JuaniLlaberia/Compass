import { useState } from 'react';
import { useForm } from 'react-hook-form';
import RadioGroup from '../../components/RadioGroup';
import SettingsBtns from './SettingsBtns';
import SelectSingle from '../../components/SelectSingle';
import LikesSection from '../user/LikesSection';
import { useThemeContext } from '../../context/ThemeContext';
import { useAuthContext } from '../../context/AuthContext';

const UserSettings = () => {
  const { user } = useAuthContext();
  const { likes, extraLikes } = user.data;
  const { toggleTheme, theme } = useThemeContext();
  const { register } = useForm({
    defaultValues: { theme },
  });
  const [language, setLanguage] = useState('English');

  return (
    <section className='relative h-full'>
      <h1 className='font-semibold text-light-text-1 dark:text-dark-text-1 border-b border-light-border-1 dark:border-dark-border-1 py-1 mb-2'>
        Theme
      </h1>
      <RadioGroup
        options={['Light', 'Dark']}
        fn={register('theme', {
          onChange: val => {
            toggleTheme(val.target.value);
          },
        })}
      />
      <h1 className='font-semibold text-light-text-1 dark:text-dark-text-1 border-b border-light-border-1 dark:border-dark-border-1 py-1 mb-2 mt-2'>
        Language
      </h1>
      <SelectSingle
        selectedOption={language}
        onChange={''}
        options={['English']}
      />
      <h1 className='font-semibold text-light-text-1 dark:text-dark-text-1 border-b border-light-border-1 dark:border-dark-border-1 py-1 mb-2'>
        My Likes
      </h1>
      <LikesSection
        likes={likes}
        extraLikes={extraLikes}
      />
      <SettingsBtns />
    </section>
  );
};

export default UserSettings;
