import Input from './Input';
import InputWrapper from './InputWrapper';

export const BusinessFields = ({ register, error }) => {
  return (
    <>
      <InputWrapper
        label='Business name'
        id='name'
        error={error?.fullName?.message}
      >
        <Input
          register={register('fullName', {
            required: 'Please provide your name',
          })}
          error={error?.fullName}
          id='name'
          placeholder='Full name'
          type='text'
        />
      </InputWrapper>
      <InputWrapper
        label='Location'
        id='location'
        error={error?.location?.message}
      >
        <Input
          register={register('location', {
            required: 'Please provide your address',
          })}
          error={error?.location}
          id='location'
          placeholder='Location'
          type='text'
        />
      </InputWrapper>
      <InputWrapper
        label='Business category'
        id='category'
        error={error?.category?.message}
      >
        <Input
          register={register('category', {
            required: 'Please provide your category',
          })}
          error={error?.category}
          id='category'
          placeholder='Category'
          type='text'
        />
      </InputWrapper>
      <InputWrapper
        label='Extra field?'
        id='x'
        error={error?.x?.message}
      >
        <Input
          register={register('x')}
          error={error?.x}
          id='x'
          placeholder='x'
          type='text'
        />
      </InputWrapper>
    </>
  );
};
