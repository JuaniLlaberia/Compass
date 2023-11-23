import { subYears } from 'date-fns';
import Input from './Input';
import InputWrapper from './InputWrapper';
import Select from './Select';
import RadioGroup from './RadioGroup';
import { categories } from '../utils/lists/categories';

export const UserFields = ({ register, error, setValue, selectedOptions }) => {
  return (
    <>
      <InputWrapper
        label='Full name'
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
        label='Birth date'
        id='birth'
        error={error?.birthDate?.message}
      >
        <Input
          register={register('birthDate', {
            required: 'Please provide your address',
          })}
          error={error?.birthDate}
          id='birth'
          placeholder='Birthdate'
          type='date'
          max={subYears(new Date(), 18).toISOString().split('T')[0]}
        />
      </InputWrapper>
      <InputWrapper
        label='Gender'
        id='gender'
        error={error?.gender?.message}
      >
        <RadioGroup
          options={['male', 'female', 'other']}
          fn={register('gender', {
            required: 'Please specify your gender',
          })}
        />
      </InputWrapper>
      <InputWrapper label='What job category are you looking?'>
        <Select
          options={categories}
          onChange={setValue}
          selectedOptions={selectedOptions}
        />
      </InputWrapper>
    </>
  );
};
