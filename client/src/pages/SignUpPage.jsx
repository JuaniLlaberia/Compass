import { useForm } from 'react-hook-form';
import MainHeader from '../components/MainHeader';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import AccTypeForm from '../components/AccTypeForm';
import UserInfoForm from '../components/UserInfoForm';
import UserImgForm from '../components/UserImgForm';

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { crrStep, nextStep, prevStep, isFirstStep, isLastStep } =
    useMultiStepForm([
      <AccTypeForm
        register={register}
        errors={errors}
      />,
      <UserInfoForm
        register={register}
        errors={errors}
      />,
      <UserImgForm
        register={register}
        errors={errors}
      />,
    ]);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <MainHeader />
      <main className=' bg-light-bg-1 dark:bg-dark-bg-1 p-4'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-3 '
        >
          {crrStep}
          <div className='flex gap-3 justify-end mt-6'>
            {!isFirstStep && (
              <button
                className='text-light-text-2'
                onClick={prevStep}
              >
                Back
              </button>
            )}
            <button
              onClick={nextStep}
              className='bg-dark-bg-2 text-dark-text-1 px-6 py-2 rounded-md active:bg-dark-bg-3 md:hover:bg-dark-bg-3 transition-colors'
            >
              {isLastStep ? 'Done' : 'Next'}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default SignUpPage;
