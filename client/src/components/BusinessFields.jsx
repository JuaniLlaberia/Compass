import Input from './Input';
import InputWrapper from './InputWrapper';
import Select from './Select';
import { categories } from '../utils/lists/categories';

export const BusinessFields = ({
  register,
  error,
  setValue,
  selectedOptions,
}) => {
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
      <InputWrapper label='What are you looking to hire?'>
        <Select
          options={categories}
          onChange={setValue}
          selectedOptions={selectedOptions}
        />
      </InputWrapper>
    </>
  );
};
