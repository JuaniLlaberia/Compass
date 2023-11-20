import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className='text-black'>
      Layout
      <Outlet />
      <Link to='/app'>TEST 1</Link>
      <Link to='/settings'>TEST 2</Link>
      <Link to='/'>TEST 3</Link>
    </div>
  );
};

export default AppLayout;
