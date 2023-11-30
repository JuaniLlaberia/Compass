import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import RadioGroup from '../../components/RadioGroup';
import SelectMultiple from '../../components/SelectMultiple';
import SeparatorHeader from '../../components/SeparatorHeader';
import { categories } from '../../utils/lists/categories';

const BusinessEditFields = ({
  register,
  selectedOptions,
  updateSelectedOptionsForm,
  errors,
}) => {
  return (
    <>
      <SeparatorHeader>Business Information</SeparatorHeader>
      <InputWrapper
        label='Business name'
        id='name'
        error={errors?.fullName?.message}
      >
        <Input
          register={register('fullName', {
            required: 'Please provide your name',
          })}
          id='name'
          placeholder='Business name'
          type='text'
        />
      </InputWrapper>
      <InputWrapper
        label='Summary'
        id='summary'
        error={errors?.summary?.message}
      >
        <TextArea
          register={register('summary', {
            required: 'Please tell us about you',
          })}
          maxLength={200}
          id='summary'
          placeholder='Summary'
          type='text'
        />
      </InputWrapper>
      <SeparatorHeader>Search information</SeparatorHeader>
      <InputWrapper label='What do you need to hire?'>
        <SelectMultiple
          options={categories}
          selectedOptions={selectedOptions}
          onChange={updateSelectedOptionsForm}
        />
      </InputWrapper>
      <InputWrapper
        label='Gender'
        error={errors?.gender?.message}
      >
        <RadioGroup
          options={['male', 'female', 'all']}
          fn={register('gender', {
            required: 'Please specify your gender',
          })}
        />
      </InputWrapper>
      <div className='flex gap-4'>
        <InputWrapper
          error={errors?.minAge?.message}
          label='Mininum age'
          id='minAge'
        >
          <Input
            register={register('minAge', {
              required: 'Specify the min. age',
              min: [18, 'The minimum age is 18'],
              max: [120, 'The maximum age is 120'],
            })}
            id='minAge'
            type='number'
            placeholder='test'
          />
        </InputWrapper>
        <InputWrapper
          error={errors?.maxAge?.message}
          label='Maximun age'
          id='maxAge'
        >
          <Input
            register={register('maxAge', {
              required: 'Please a max. age',
              min: [18, 'The minimum age is 18'],
              max: [120, 'The maximum age is 120'],
            })}
            id='maxAge'
            type='number'
            placeholder='test'
          />
        </InputWrapper>
      </div>
    </>
  );
};

export default BusinessEditFields;
