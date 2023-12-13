import { useState } from 'react';
import { BusinessFields } from './BusinessFields';
import { UserFields } from './UserFields';

const UserInfoForm = ({
  register,
  error,
  selectedRole,
  categories,
  setValue,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(categories || []);

  const updateSelectedOptionsForm = newOptions => {
    setSelectedOptions(newOptions);
    setValue('category', newOptions);
  };

  return (
    <>
      <h1 className='text-light-text-1 dark:text-dark-text-1 text-2xl mb-1 font-semibold'>
        Tell us about you
      </h1>
      <p className='mb-6 lg:mb-10 text-sm lg:text-base text-light-text-2 dark:text-dark-text-2'>
        We're almost finish, we just need some extra information to set up your
        properly. All this information can be modified later in the profile.
      </p>
      {selectedRole === 'user' ? (
        <UserFields
          setValue={updateSelectedOptionsForm}
          selectedOptions={selectedOptions}
          register={register}
          error={error}
        />
      ) : (
        <BusinessFields
          setValue={updateSelectedOptionsForm}
          selectedOptions={selectedOptions}
          register={register}
          error={error}
        />
      )}
    </>
  );
};

export default UserInfoForm;
