import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AccTypeForm from '../components/AccTypeForm';
import UserInfoForm from '../components/UserInfoForm';
import UserImgForm from '../components/UserImgForm';
import Button from '../components/Button';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import { useUpdateUser } from '../features/user/useUpdateUser';
import { useAuthContext } from '../context/AuthContext';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

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
      <AccTypeForm
        register={register}
        error={errors.role}
      />,
      <UserInfoForm
        setValue={setValue}
        selectedRole={getValues('role')}
        categories={getValues('category')}
        register={register}
        error={errors}
      />,
      <UserImgForm
        register={register}
        error={errors.image}
      />,
    ]);

  const getCoords = async address => {
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=977570ac6051e2192e64942c6538d016&query=${address}`
    );

    const data = await response.json();
    const { latitude, longitude } = data.data[0];

    return [latitude, longitude];
  };

  const onSubmit = async data => {
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
      const location = `${data.address}, ${data.city} ${data.country}`;
      const [latitude, longitude] = await getCoords(location);

      formData.append('location', [latitude, longitude]);
    }

    updateUser(formData, {
      onSuccess: () => navigate('/app'),
    });
  };

  useEffect(() => {
    if (user?.status === 'success' && !user?.data?.newUser)
      return navigate('/app');
  }, [user]);

  return (
    <>
      <header className='fixed top-0 bg-secondary-1 w-full h-14 flex justify-center items-center'></header>
      <main className='h-[100dvh]'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-light-bg-1 dark:bg-dark-bg-1 h-full py-4 px-7 pt-16'
        >
          {crrStep}
          <section className='flex gap-4 justify-end mt-6'>
            {!isFirstStep && (
              <button
                disabled={isUpdating}
                className='text-light-text-2 dark:text-dark-text-2'
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
