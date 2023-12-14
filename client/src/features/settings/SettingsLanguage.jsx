import { useState } from 'react';
import SelectSingle from '../../components/SelectSingle';

const SettingsLanguage = () => {
  const [language, setLanguage] = useState('English');

  return (
    <>
      <h4 className='my-4 text-light-text-1 dark:text-dark-text-1 font-semibold text-xl lg:text-2xl'>
        Change Language
      </h4>
      <p className='mb-4 text-light-text-2 dark:text-dark-text-2'>
        Select your prefered language.
      </p>
      <SelectSingle
        selectedOption={language}
        onChange={''}
        options={['English']}
      />
    </>
  );
};

export default SettingsLanguage;
