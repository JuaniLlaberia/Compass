import Test from './Test';
import { useAuthContext } from '../context/AuthContext';
import HiddenUserCard from '../components/HiddenUserCard';

const HomePage = () => {
  const { user } = useAuthContext();

  return <>{!user.data.hideUser ? <Test /> : <HiddenUserCard />}</>;
};

export default HomePage;
