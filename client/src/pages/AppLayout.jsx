import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav';

const AppLayout = () => {
  return (
    <>
      <MainHeader />
      <main className='bg-light-bg-1 dark:bg-dark-bg-1 h-[100dvh] py-16'>
        <Outlet />
      </main>
      <MainNav />
    </>
  );
};

export default AppLayout;
