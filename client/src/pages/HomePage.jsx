import Cards from '../features/user/Cards';
import { useAuthContext } from '../context/AuthContext';
import HiddenUserCard from '../features/user/HiddenUserCard';

const HomePage = () => {
  const { user } = useAuthContext();

  return <>{!user.data.hideUser ? <Cards /> : <HiddenUserCard />}</>;
};

export default HomePage;
