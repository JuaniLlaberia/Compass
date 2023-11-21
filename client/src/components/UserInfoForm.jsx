import Input from './Input';
import InputWrapper from './InputWrapper';

const UserInfoForm = ({ register, errors }) => {
  return (
    <>
      <h1 className='text-light-text-1 dark:text-dark-text-1 text-2xl mb-1 font-semibold'>
        Tell us about you
      </h1>
      <p className='mb-6 text-sm text-light-text-2 dark:text-dark-text-2'>
        We're almost finish, we just need some extra information to set up your
        properly. All this information can be modified later. profile.
      </p>
      <InputWrapper
        label='Business name'
        id='name'
        error={false}
      >
        <Input
          register={register('fullName', {
            required: 'Please provide your name',
          })}
          error={false}
          id='name'
          placeholder='Full name'
          type='text'
        />
      </InputWrapper>
      <InputWrapper
        label='Location'
        id='location'
        error={false}
      >
        <Input
          register={register('location', {
            required: 'Please provide your address',
          })}
          error={false}
          id='location'
          placeholder='Location'
          type='text'
        />
      </InputWrapper>
      <InputWrapper
        label='Business category'
        id='category'
        error={false}
      >
        <Input
          register={register('category', {
            required: 'Please provide your category',
          })}
          error={false}
          id='category'
          placeholder='Category'
          type='text'
        />
      </InputWrapper>
      <InputWrapper
        label='x'
        id='x'
        error={false}
      >
        <Input
          register={register('x', {
            required: 'Please provide your x',
          })}
          error={false}
          id='x'
          placeholder='x'
          type='text'
        />
      </InputWrapper>
    </>
  );
};

export default UserInfoForm;
