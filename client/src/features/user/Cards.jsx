import UserCard from './UserCard';
import BusinessCard from './BusinessCard';
import { useAuthContext } from '../../context/AuthContext';

const Cards = ({ userToSwipe }) => {
  const { user } = useAuthContext();

  return (
    <>
      {user.data.role === 'user' ? (
        <BusinessCard
          userToSwipe={userToSwipe}
          userCategories={user.data.category}
        />
      ) : (
        <UserCard
          userToSwipe={userToSwipe}
          userCategories={user.data.category}
        />
      )}
    </>
  );
};

export default Cards;
