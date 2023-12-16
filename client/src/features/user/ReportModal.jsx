import { useForm } from 'react-hook-form';
import TextArea from '../../components/TextArea';
import InputWrapper from '../../components/InputWrapper';
import Button from '../../components/Button';

const ReportModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendReport = ({ reportText }) => {
    console.log(reportText);
  };

  return (
    <form onSubmit={handleSubmit(sendReport)}>
      <h1 className='text-lg lg:text-xl font-semibold mb-6 px-2'>
        Report User
      </h1>
      <InputWrapper
        error={errors?.reportText?.message}
        id='report text-area'
        label='Tell us what is the problem?'
      >
        <TextArea
          register={register('reportText', {
            required: 'Please provide the problem',
            minLength: {
              value: 10,
              message: 'Please provide at least 10 characters',
            },
            maxLength: {
              value: 100,
              message: 'Please provide at less than 100 characters',
            },
          })}
          id='report text-area'
        />
      </InputWrapper>
      <div className='flex justify-end gap-2'>
        <Button onClick={onClose} type='danger'>
          Cancel
        </Button>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default ReportModal;
