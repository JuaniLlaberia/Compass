import { useForm } from 'react-hook-form';
import { useState } from 'react';
import UserEditFields from './UserEditFields';
import BusinessEditFields from './BusinessEditFields';
import { useUpdateUser } from '../user/useUpdateUser';
import { useAuthContext } from '../../context/AuthContext';

const UserEdit = () => {
  const { user } = useAuthContext();
  const { updateUser } = useUpdateUser();

  const [selectedOptionsCategory, setSelectedOptionsCategory] = useState(
    user.data.category || []
  );

  const {
    register,
    setValue,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      ...user.data,
      distance: user.data.filters?.distance,
      minAge: user.data.filters?.minAge,
      maxAge: user.data.filters?.maxAge,
      gender:
        user.data.role === 'user'
          ? user.data.gender
          : user.data.filters?.gender,
    },
  });

  const updateSelectedOptionsForm = newOptions => {
    setSelectedOptionsCategory(newOptions);
    setValue('category', newOptions);
  };

  const onSubmit = ({
    category,
    fullName,
    summary,
    gender,
    distance,
    maxAge,
    minAge,
  }) => {
    const filtersUser = {
      distance,
    };
    const filtersBuss = {
      minAge,
      maxAge,
      gender,
    };

    updateUser({
      fullName,
      summary,
      category,
      gender: user.data.role === 'user' ? gender : undefined,
      filters: user.data.role === 'user' ? filtersUser : filtersBuss,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {user.data.role === 'user' ? (
        <UserEditFields
          register={register}
          updateSelectedOptionsForm={updateSelectedOptionsForm}
          selectedOptions={selectedOptionsCategory}
          errors={errors}
          distanceValue={getValues('distance')}
        />
      ) : (
        <BusinessEditFields
          register={register}
          updateSelectedOptionsForm={updateSelectedOptionsForm}
          selectedOptions={selectedOptionsCategory}
          errors={errors}
        />
      )}
    </form>
  );
};

export default UserEdit;
