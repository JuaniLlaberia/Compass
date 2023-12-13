import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleBtn from '../features/auth/GoogleBtn';
import FacebookBtn from '../features/auth/FacebookBtn';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { useAuthContext } from '../context/AuthContext';

const AuthPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user?.status === 'success' && !user?.data?.newUser)
      return navigate('/app');
  }, [user]);

  return (
    <>
      <main className='text-black p-4 flex flex-col justify-between items-center h-[100dvh]'>
        <h1 className='text-lg font-semibold text-center mb-5'>LOGO (big)</h1>
        <h2 className='text-2xl font-bold text-center py-24 md:text-3xl xl:text-5xl'>
          Find your ideal job
        </h2>
        <Modal>
          <div className='py-8 px-8 md:px-24 w-full md:max-w-[650px]'>
            <Modal.Open opens='auth-modal'>
              <button className='bg-gradient border-2 border-light-border-1 py-2.5 px-6 rounded-full w-full mb-3  text-dark-text-1 font-semibold text-lg active:bg-secondary-2 md:hover:bg-secondary-2 xl:text-2xl'>
                Log In
              </button>
            </Modal.Open>
            <Modal.Open opens='auth-modal'>
              <button className='bg-light-bg-1 border-2 border-light-border-1 text-light-text-1 py-2.5 px-6 rounded-full w-full font-semibold text-lg active:bg-light-bg-2 md:hover:bg-light-bg-2 xl:text-2xl'>
                Join Now
              </button>
            </Modal.Open>
          </div>
          <Modal.Window windowName='auth-modal'>
            <>
              <h1 className='text-center mb-4'>LOGO (small)</h1>
              <h2 className='text-lg text-center font-semibold mb-2 lg:text-2xl'>
                Welcome! Let's get started
              </h2>
              <p className='px-2 text-light-text-2 lg:text-lg'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
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
      </main>
      <Footer />
    </>
  );
};

export default AuthPage;
