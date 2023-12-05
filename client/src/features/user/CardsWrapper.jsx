import Cards from './Cards';
import CardsEmpty from './CardsEmpty';
import CardsLoader from './CardsLoader';
import CardsBtns from './CardsBtns';
import CardsError from './CardsError';
import CardsMatch from './CardsMatch';
import CardsPopUp from './CardsPopUp';
import PacksModal from '../payments/PacksModal';
import { useGetUsers } from './useGetUsers';
import { useSwipeRight } from './useSwipeRight';
import { useSwipeLeft } from './useSwipeLeft';

const CardsWrapper = () => {
  const { users, isLoading, refetch, error } = useGetUsers();
  const { swipeRight, isMatch, closeMatch, isLikesError, closeError } =
    useSwipeRight();
  const { swipeLeft } = useSwipeLeft();

  const swipeUserRight = () => {
    //Perform swipe with userId
    swipeRight(users.data[0]._id, {
      onSuccess: () => {
        //Remove user from screen
        users.data.shift();
        //Fetch more users
        refetch();
      },
    });
  };
  const swipeUserLeft = () => {
    //Perform swipe with userId
    swipeLeft(users.data[0]._id, {
      onSuccess: () => {
        //Remove user from screen
        users.data.shift();
        //Fetch more users
        refetch();
      },
    });
  };

  if (isLoading) return <CardsLoader />;
  if (error) return <CardsError />;

  return (
    <>
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
      {isMatch ? (
        <CardsPopUp onClose={closeMatch}>
          <CardsMatch />
        </CardsPopUp>
      ) : null}
      {isLikesError ? (
        <CardsPopUp onClose={closeError}>
          <PacksModal />
        </CardsPopUp>
      ) : null}
    </>
  );
};

export default CardsWrapper;
