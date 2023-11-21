import { subYears } from 'date-fns';
import Input from './Input';
import InputWrapper from './InputWrapper';
import CustomRadioSmall from './CustomRadioSmall';

export const UserFields = ({ register, error }) => {
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
        <ul className='flex gap-3'>
          {['male', 'female', 'other'].map(gender => (
            <CustomRadioSmall
              key={gender}
              value={gender}
              label={gender}
              register={register('gender', {
                required: 'Please specify your gender',
              })}
            />
          ))}
        </ul>
      </InputWrapper>
      <InputWrapper
        label='What are you looking?'
        id='category'
        error={error?.category?.message}
      >
        <Input
          register={register('category', {
            required: 'Please provide a category',
          })}
          error={error?.category}
          id='category'
          placeholder='Category'
          type='text'
        />
      </InputWrapper>
    </>
  );
};
