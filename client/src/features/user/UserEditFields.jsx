import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import RadioGroup from '../../components/RadioGroup';
import Select from '../../components/Select';
import { categories } from '../../utils/lists/categories';

const UserEditFields = ({
  register,
  selectedOptions,
  updateSelectedOptionsForm,
}) => {
  return (
    <>
      <h1 className='border-b py-2 mb-8 font-semibold'>Personal Information</h1>

      <InputWrapper label='Full name' id='name'>
        <Input
          register={register('fullName', {
            required: 'Please provide your name',
          })}
          id='name'
          placeholder='Full name'
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
      <InputWrapper label='Gender'>
        <RadioGroup
          options={['male', 'female', 'other']}
          fn={register('gender', {
            required: 'Please specify your gender',
          })}
        />
      </InputWrapper>
      <h1 className='border-b py-2 mb-8 font-semibold'>Extra Information</h1>
      <InputWrapper label='What type of jobs are you looking?'>
        <Select
          options={categories}
          selectedOptions={selectedOptions}
          onChange={updateSelectedOptionsForm}
        />
      </InputWrapper>
      <p className='py-1.5'></p>
      <InputWrapper label='Distance (Kilometers)'>
        <input
          {...register('distance')}
          type='range'
          className='mt-4 transparent h-[3px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600 accent-secondary-1'
          min={1}
          max={400}
        />
      </InputWrapper>
      <Button>Save</Button>
    </>
  );
};

export default UserEditFields;
