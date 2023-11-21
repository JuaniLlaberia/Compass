import { useForm } from 'react-hook-form';
import MainHeader from '../components/MainHeader';
import AccTypeForm from '../components/AccTypeForm';
import UserInfoForm from '../components/UserInfoForm';
import UserImgForm from '../components/UserImgForm';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import { useUpdateUser } from '../features/user/useUpdateUser';

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const { updateUser, isUpdating } = useUpdateUser();

  const { crrStep, nextStep, prevStep, isFirstStep, isLastStep } =
    useMultiStepForm([
      <AccTypeForm
        register={register}
        error={errors.role}
      />,
      <UserInfoForm
        selectedRole={getValues('role')}
        register={register}
        error={errors}
      />,
      <UserImgForm
        register={register}
        error={errors.image}
      />,
    ]);

  const onSubmit = data => {
    if (!isLastStep) return nextStep();

    //Handle data and image -> send to back-end
    const formData = new FormData();

    formData.append('role', data.role);
    formData.append('fullName', data.fullName);
    formData.append('profileImage', data.image[0]);
    formData.append('category', data.category);
    formData.append('newUser', false);

    if (data.role === 'user') {
      formData.append('gender', data.gender);
      formData.append('birthDate', data.birthDate);
    } else {
      formData.append('location', data.location);
    }

    updateUser(formData);
  };

  return (
    <>
      <MainHeader />
      <main className='bg-light-bg-1 dark:bg-dark-bg-1 p-4'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-3'
        >
          {crrStep}
          <div className='flex gap-3 justify-end mt-6'>
            {!isFirstStep && (
              <button
                disabled={isUpdating}
                className='text-light-text-2'
                onClick={prevStep}
              >
                Back
              </button>
            )}
            <button
              disabled={isUpdating}
              className='bg-dark-bg-2 text-dark-text-1 px-6 py-2 rounded-md active:bg-dark-bg-3 md:hover:bg-dark-bg-3 transition-colors'
            >
              {isLastStep ? (isUpdating ? 'Loading...' : 'Done') : 'Next'}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default SignUpPage;
