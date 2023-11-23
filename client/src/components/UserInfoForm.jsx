import { BusinessFields } from './BusinessFields';
import { UserFields } from './UserFields';

const UserInfoForm = ({ register, error, selectedRole }) => {
  return (
    <>
      <h1 className='text-light-text-1 dark:text-dark-text-1 text-2xl mb-1 font-semibold'>
        Tell us about you
      </h1>
      <p className='mb-6 text-sm text-light-text-2 dark:text-dark-text-2'>
        We're almost finish, we just need some extra information to set up your
        properly. All this information can be modified later in the profile.
      </p>
      {selectedRole === 'user' ? (
        <UserFields
          register={register}
          error={error}
        />
      ) : (
        <BusinessFields
          register={register}
          error={error}
        />
      )}
    </>
  );
};

export default UserInfoForm;
