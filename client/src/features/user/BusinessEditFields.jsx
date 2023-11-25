import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import RadioGroup from '../../components/RadioGroup';
import Select from '../../components/Select';
import { categories } from '../../utils/lists/categories';

const BusinessEditFields = ({
  register,
  selectedOptions,
  updateSelectedOptionsForm,
}) => {
  return (
    <>
      <h1 className='border-b py-2 mb-8 font-semibold'>Business Information</h1>
      <InputWrapper label='Business name' id='name'>
        <Input
          register={register('fullName', {
            required: 'Please provide your name',
          })}
          id='name'
          placeholder='Business name'
          type='text'
        />
      </InputWrapper>
      <InputWrapper label='Summary' id='summary'>
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
      <InputWrapper label='What do you need to hire?'>
        <Select
          options={categories}
          selectedOptions={selectedOptions}
          onChange={updateSelectedOptionsForm}
        />
      </InputWrapper>
      <h1 className='border-b py-2 mb-8 font-semibold'>Search filters</h1>
      <InputWrapper label='Gender'>
        <RadioGroup
          options={['male', 'female', 'all']}
          fn={register('gender', {
            required: 'Please specify your gender',
          })}
        />
      </InputWrapper>
      <p className='p-1.5'></p>
      <InputWrapper label='Age range (min. & max.)'>
        <input
          {...register('distance')}
          type='range'
          className='mt-4 transparent h-[3px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600 accent-secondary-1'
          min={1}
          max={400}
        />
      </InputWrapper>
    </>
  );
};

export default BusinessEditFields;
