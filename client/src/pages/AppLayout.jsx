import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav';

const AppLayout = () => {
  return (
    <>
      <MainHeader />
      <main className='p-4 bg-[red]'>
        <Outlet />
      </main>
      <MainNav />
    </>
  );
};

export default AppLayout;
