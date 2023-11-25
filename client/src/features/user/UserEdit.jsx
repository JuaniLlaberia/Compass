import { useForm } from 'react-hook-form';

import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import UserEditFields from './UserEditFields';
import BusinessEditFields from './BusinessEditFields';

const UserEdit = () => {
  const { user } = useAuthContext();
  const [selectedOptions, setSelectedOptions] = useState(
    user.data.category || []
  );

  const {
    register,
    setValue,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: user.data });

  const updateSelectedOptionsForm = newOptions => {
    setSelectedOptions(newOptions);
    setValue('category', newOptions);
  };

  const onSubmit = data => {
    console.log(data);
    //Perform update
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {user.data.role === 'user' ? (
        <UserEditFields
          register={register}
          updateSelectedOptionsForm={updateSelectedOptionsForm}
          selectedOptions={selectedOptions}
        />
      ) : (
        <BusinessEditFields
          register={register}
          updateSelectedOptionsForm={updateSelectedOptionsForm}
          selectedOptions={selectedOptions}
        />
      )}
    </form>
  );
};

export default UserEdit;
