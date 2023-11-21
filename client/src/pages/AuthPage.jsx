import GoogleBtn from '../components/GoogleBtn';
import FacebookBtn from '../components/FacebookBtn';

const AuthPage = () => {
  return (
    <main className='text-black p-4 flex flex-col justify-between h-[100dvh]'>
      <h1 className='text-lg font-semibold text-center mb-5'>LOGO</h1>
      <h2 className='text-2xl font-bold text-center py-24'>
        Find your ideal job
      </h2>
      <div className='py-8'>
        <FacebookBtn />
        <GoogleBtn />
      </div>
    </main>
  );
};

export default AuthPage;
