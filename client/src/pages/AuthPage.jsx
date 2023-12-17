import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleBtn from '../features/auth/GoogleBtn';
import FacebookBtn from '../features/auth/FacebookBtn';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { useAuthContext } from '../context/AuthContext';

const AuthPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user?.status === 'success' && !user?.data?.newUser)
      return navigate('/app');
  }, [user, navigate]);

  return (
    <>
      <Modal>
        <main
          className={`bg-dark-bg-2 p-4 flex flex-col justify-between bg-[url('/bg_mobile.svg')] md:bg-[url('/bg_mid.svg')] xl:bg-[url('../../public/bg_large.svg')] items-center h-[100dvh] bg-center bg-no-repeat bg-cover`}
        >
          <Logo />

          <section className='flex flex-col items-center mb-20'>
            <h2 className='text-dark-text-1 text-4xl font-special font-bold text-center pt-24 pb-6 md:pb-12 md:text-6xl xl:text-9xl'>
              Find your ideal{' '}
              <span className='bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent'>
                Job
              </span>
            </h2>
            <Modal.Open opens='auth-modal'>
              <button className='bg-light-bg-1 w-full max-w-[300px] py-2.5 md:py-4 px-4 md:px-6 rounded-2xl md:rounded-3xl mb-3 text-light-text-1 font-semibold text-lg active:bg-secondary-2 xl:text-2xl md:hover:opacity-90 transition-all'>
                Get started
              </button>
            </Modal.Open>
          </section>
          <div></div>
        </main>
        <Modal.Window windowName='auth-modal'>
          <>
            <Logo withText={false} />
            <h2 className='text-xl text-center mt-5 font-semibold mb-2 lg:text-2xl'>
              Welcome! Let's get started
            </h2>
            <div className='mt-12 px-3'>
              <FacebookBtn />
              <GoogleBtn />
            </div>
            <p className='bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent font-semibold text-center mt-4 md:hover:underline active:text-seconary-2 lg:text-lg lg:mt-8'>
              Problems with your account?
            </p>
          </>
        </Modal.Window>
      </Modal>
      <Footer />
    </>
  );
};

export default AuthPage;
