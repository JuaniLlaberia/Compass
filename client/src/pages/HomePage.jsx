import { useGetUsers } from '../features/user/useGetUsers';
import { useSwipeRight } from '../features/user/useSwipeRight';
import { useSwipeLeft } from '../features/user/useSwipeLeft';
import Test from './Test';

const HomePage = () => {
  const { users, isLoading, refetch, isRefetching, error } = useGetUsers();
  const { swipeRight } = useSwipeRight();
  const { swipeLeft } = useSwipeLeft();

  if (isLoading) return <h1>Loading</h1>;

  return (
    <>
      <Test
        users={users.data}
        refetch={refetch}
        swipeLeft={swipeLeft}
        swipeRight={swipeRight}
      />
    </>
  );
};

export default HomePage;
