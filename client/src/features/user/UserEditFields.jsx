import { useState } from 'react';
import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import RadioGroup from '../../components/RadioGroup';
import SelectMultiple from '../../components/SelectMultiple';
import SeparatorHeader from '../../components/SeparatorHeader';
import { categories } from '../../utils/lists/categories';

const UserEditFields = ({
  register,
  selectedOptions,
  updateSelectedOptionsForm,
  errors,
  distanceValue,
}) => {
  const [distanceCount, setDistanceCount] = useState(distanceValue || 1);

  return (
    <>
      <SeparatorHeader>Personal Information</SeparatorHeader>
      <InputWrapper
        error={errors?.fullName?.message}
        label='Full name'
        id='name'
      >
        <Input
          register={register('fullName', {
            required: 'Please provide your name',
          })}
          id='name'
          placeholder='Full name'
          type='text'
        />
      </InputWrapper>
      <InputWrapper
        error={errors?.summary?.message}
        label='Summary'
        id='summary'
      >
        <TextArea
          register={register('summary', {
            required: 'Please tell us about you',
          })}
          maxLength={300}
          id='summary'
          placeholder='Summary'
          type='text'
        />
      </InputWrapper>
      <InputWrapper
        label='Gender'
        error={errors?.gender?.message}
      >
        <RadioGroup
          options={['male', 'female', 'other']}
          fn={register('gender', {
            required: 'Please specify your gender',
          })}
        />
      </InputWrapper>
      <SeparatorHeader>Search Information</SeparatorHeader>
      <InputWrapper label='What type of jobs are you looking?'>
        <SelectMultiple
          options={categories}
          selectedOptions={selectedOptions}
          onChange={updateSelectedOptionsForm}
        />
      </InputWrapper>
      <InputWrapper
        label='Distance to work'
        error={errors?.distance?.message}
      >
        <span className='absolute text-sm -top-4 right-1 font-semibold'>
          {distanceCount} km.
        </span>
        <input
          type='range'
          min={1}
          max={50}
          className='w-full mt-4 transparent h-[3px] placeholder:cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600 accent-secondary-1'
          {...register('distance', {
            min: [1],
            max: [50],
            onChange: e => setDistanceCount(e.target.value),
          })}
        />
      </InputWrapper>
    </>
  );
};

export default UserEditFields;
