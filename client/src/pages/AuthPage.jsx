import GoogleBtn from '../components/GoogleBtn';
import FacebookBtn from '../components/FacebookBtn';
import Modal from '../components/Modal';

const AuthPage = () => {
  return (
    <main className='text-black p-4 flex flex-col justify-between h-[100dvh]'>
      <h1 className='text-lg font-semibold text-center mb-5'>LOGO</h1>
      <h2 className='text-2xl font-bold text-center py-24'>
        Find your ideal job
      </h2>
      <Modal>
        <div className='py-8'>
          <Modal.Open opens='login-modal'>
            <button className='bg-secondary-1 py-2.5 px-6 rounded-full w-full mb-3  text-dark-text-1 font-semibold text-lg'>
              Login
            </button>
          </Modal.Open>
          <Modal.Open opens='singup-modal'>
            <button className='bg-secondary-1 py-2.5 px-6 rounded-full w-full text-dark-text-1 font-semibold text-lg'>
              Get started
            </button>
          </Modal.Open>
        </div>
        <Modal.Window windowName='login-modal'>
          <>
            <h1 className='text-center mb-4'>LOGO</h1>
            <h2 className='text-lg text-center font-semibold mb-2'>
              Get started
            </h2>
            <p className='px-2 text-light-text-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </p>
            <div className='mt-12'>
              <FacebookBtn />
              <GoogleBtn />
            </div>
          </>
        </Modal.Window>
      </Modal>
      {/* <div className='pb-4 pt-8'>
        <FacebookBtn />
        <GoogleBtn />
      </div> */}
    </main>
  );
};

export default AuthPage;
