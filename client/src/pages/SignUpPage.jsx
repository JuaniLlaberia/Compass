import { useForm } from 'react-hook-form';
import MainHeader from '../components/MainHeader';
import AccTypeForm from '../components/AccTypeForm';
import UserInfoForm from '../components/UserInfoForm';
import UserImgForm from '../components/UserImgForm';
import Button from '../components/Button';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import { useUpdateUser } from '../features/user/useUpdateUser';

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
  } = useForm();

  const { updateUser, isUpdating } = useUpdateUser();

  const { crrStep, nextStep, prevStep, isFirstStep, isLastStep } =
    useMultiStepForm([
      <AccTypeForm register={register} error={errors.role} />,
      <UserInfoForm
        setValue={setValue}
        selectedRole={getValues('role')}
        categories={getValues('category')}
        register={register}
        error={errors}
      />,
      <UserImgForm register={register} error={errors.image} />,
    ]);

  const onSubmit = data => {
    console.log(data.category);
    if (!isLastStep) return nextStep();

    const formData = new FormData();

    formData.append('role', data.role);
    formData.append('fullName', data.fullName);
    formData.append('profileImage', data.image[0]);
    data.category.forEach(cat => formData.append('category', cat));
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
        <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
          {crrStep}
          <section className='flex gap-4 justify-end mt-6'>
            {!isFirstStep && (
              <button
                disabled={isUpdating}
                className='text-light-text-2'
                onClick={prevStep}
              >
                Back
              </button>
            )}
            <Button isLoading={isUpdating}>
              {isLastStep ? 'Done' : 'Next'}
            </Button>
          </section>
        </form>
      </main>
    </>
  );
};

export default SignUpPage;
