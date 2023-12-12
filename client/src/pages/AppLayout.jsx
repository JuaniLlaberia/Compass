import { Outlet } from 'react-router-dom';
import MainNav from '../components/MainNav';

const AppLayout = () => {
  return (
    <>
      <main className='bg-light-bg-1 dark:bg-dark-bg-1 h-screen pb-16'>
        <Outlet />
      </main>
      <MainNav />
    </>
  );
};

export default AppLayout;
