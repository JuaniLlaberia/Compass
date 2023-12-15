import { Outlet, ScrollRestoration } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <>
      <main
        id='bganimation'
        className='text-black p-4 flex flex-col items-center h-[100dvh] '
      >
        <Logo />
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default HomeLayout;
