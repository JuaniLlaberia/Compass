import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    //Redirect un auth users to default page
    if (user?.status === 'failed') return navigate('/');
    //New user must go through registration proccess
    if (user?.status === 'success' && user?.data?.newUser)
      return navigate('/signup/information');
    if (user?.status === 'success' && !user?.data?.newUser)
      return navigate('/app');
  }, [user, navigate]);

  if (user?.status === 'success') return <Outlet />;
};

export default ProtectedRoutes;
