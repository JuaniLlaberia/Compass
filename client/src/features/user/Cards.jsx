import UsersCard from './UsersCard';
import { useAuthContext } from '../../context/AuthContext';

const Cards = ({ userToSwipe }) => {
  const { user } = useAuthContext();
  const { category } = userToSwipe;

  const matchedCategories = user.data.category.filter(cat =>
    category.includes(cat)
  );

  const categoriesToRender = category.sort(cat =>
    matchedCategories.includes(cat) ? -1 : 1
  );

  return (
    <UsersCard
      userData={userToSwipe}
      categories={categoriesToRender}
      matchedCategories={matchedCategories}
    />
  );
};

export default Cards;
