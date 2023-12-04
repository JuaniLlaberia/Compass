import { FcShop, FcConferenceCall } from 'react-icons/fc';
import CustomRadio from '../../components/CustomRadio';

const AccTypeForm = ({ register, error }) => {
  return (
    <>
      <h1 className='text-light-text-1 dark:text-dark-text-1 text-2xl mb-1 font-semibold'>
        Select account type
      </h1>
      <p className='mb-6 text-sm text-light-text-2 dark:text-dark-text-2'>
        If you are looking for a job you should select 'Employee'. But if you
        are a business and are looking to hire, select 'Business'.
      </p>
      <ul className='flex flex-col gap-4'>
        <CustomRadio
          label='User'
          icon={<FcConferenceCall size={50} />}
          id='role-user'
          value='user'
          register={register('role', {
            required: 'Please select one option',
          })}
        />
        <CustomRadio
          label='Business'
          icon={<FcShop size={50} />}
          id='role-business'
          value='business'
          register={register('role', {
            required: 'Please select one option',
          })}
        />
      </ul>
      {error && <p className='text-red-500 mt-2'>{error.message}</p>}
    </>
  );
};

export default AccTypeForm;
