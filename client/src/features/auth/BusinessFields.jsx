import Input from '../../components/Input';
import InputWrapper from '../../components/InputWrapper';
import SelectMultiple from '../../components/SelectMultiple';
import { categories } from '../../utils/lists/categories';

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
        label='Address'
        id='address'
        error={error?.address?.message}
      >
        <Input
          register={register('address', {
            required: 'Please provide your address',
          })}
          error={error?.address}
          id='address'
          placeholder='address'
          type='text'
        />
      </InputWrapper>
      <div className='flex gap-4'>
        <InputWrapper
          label='City'
          id='city'
          error={error?.city?.message}
        >
          <Input
            register={register('city', {
              required: 'Please provide your city',
            })}
            error={error?.city}
            id='city'
            placeholder='city'
            type='text'
          />
        </InputWrapper>
        <InputWrapper
          label='Country'
          id='country'
          error={error?.country?.message}
        >
          <Input
            register={register('country', {
              required: 'Please provide your country',
            })}
            error={error?.country}
            id='country'
            placeholder='country'
            type='text'
          />
        </InputWrapper>
      </div>
      <InputWrapper label='What are you looking to hire?'>
        <SelectMultiple
          options={categories}
          onChange={setValue}
          selectedOptions={selectedOptions}
        />
      </InputWrapper>
    </>
  );
};
