import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AccTypeForm from '../features/auth/AccTypeForm';
import UserInfoForm from '../features/auth/UserInfoForm';
import UserImgForm from '../features/auth/UserImgForm';
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
    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${address}`
      );

      const data = await response.json();

      const { lat, lon } = data[0];

      return [lat, lon];
    } catch (err) {
      console.log(err);
    }
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
      formData.append('filters', JSON.stringify({ distance: 5 }));
    } else {
      const location = `${data.address}, ${data.city} ${data.country}`;
      const [lat, lon] = await getCoords(location);

      formData.append('location', [lon, lat]);
      formData.append('address', location);
      formData.append(
        'filters',
        JSON.stringify({ minAge: 18, maxAge: 60, gender: 'male' })
      );
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
