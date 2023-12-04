import Cards from './Cards';
import CardsEmpty from './CardsEmpty';
import CardsLoader from './CardsLoader';
import CardsBtns from './CardsBtns';
import CardsError from './CardsError';
import { useGetUsers } from './useGetUsers';
import { useSwipeRight } from './useSwipeRight';
import { useSwipeLeft } from './useSwipeLeft';

const CardsWrapper = () => {
  const { users, isLoading, refetch, error, isRefetching } = useGetUsers();
  const { swipeRight } = useSwipeRight();
  const { swipeLeft } = useSwipeLeft();

  const swipeUserRight = () => {
    //Remove user from screen
    const swipedUser = users.data.shift();
    //Perform swipe with userId
    swipeRight(swipedUser._id, {
      onSuccess: () => {
        //Fetch more users
        refetch();
      },
    });
  };
  const swipeUserLeft = () => {
    //Remove user from screen
    //Perform swipe with userId
    const swipedUser = users.data.shift();
    //Perform swipe with userId
    swipeLeft(swipedUser._id, {
      onSuccess: () => {
        //Fetch more users
        refetch();
      },
    });
  };

  if (isLoading) return <CardsLoader />;
  if (error) return <CardsError />;

  return (
    <section className='relative h-full'>
      {users.data.length !== 0 && !isLoading ? (
        <>
          <Cards userToSwipe={users.data[0]} />
          <CardsBtns
            swipeUserLeft={swipeUserLeft}
            swipeUserRight={swipeUserRight}
          />
        </>
      ) : (
        <CardsEmpty />
      )}
    </section>
  );
};

export default CardsWrapper;
