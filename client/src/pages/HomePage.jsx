import HiddenUserCard from '../features/user/HiddenUserCard';
import CardsWrapper from '../features/user/CardsWrapper';
import { useAuthContext } from '../context/AuthContext';

const HomePage = () => {
  const { user } = useAuthContext();

  return <>{!user.data.hideUser ? <CardsWrapper /> : <HiddenUserCard />}</>;
};

export default HomePage;
