import { useEffect, useState } from 'react';
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
  const {
    swipeRight,
    isMatch,
    matchedUser,
    closeMatch,
    isLikesError,
    closeError,
  } = useSwipeRight();
  const { swipeLeft } = useSwipeLeft();

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    if (users?.data && users?.data.length > 0) {
      setCurrentCardIndex(0);
    }
  }, [users]);

  const fetchNextCard = async () => {
    try {
      const response = await refetch();
      if (response.status === 'success') {
        setCurrentCardIndex(users.data.length - 1);
      }
    } catch (error) {
      console.error('Error fetching next user:', error);
    }
  };

  const swipeUserRight = () => {
    if (currentCardIndex < users.data.length) {
      const swipedUser = users.data[currentCardIndex];
      swipeRight(swipedUser, {
        onSuccess: () => {
          fetchNextCard();
        },
      });
    }
  };

  const swipeUserLeft = () => {
    if (currentCardIndex < users.data.length) {
      const swipedUserId = users.data[currentCardIndex]._id;
      swipeLeft(swipedUserId, {
        onSuccess: () => {
          fetchNextCard();
        },
      });
    }
  };

  if (isLoading) return <CardsLoader />;
  if (error) return <CardsError />;

  return (
    <>
      <section className='relative h-full px-3 md:px-12'>
        {users.data.length !== 0 && !isLoading ? (
          <div className='flex justify-center w-full'>
            <Cards userToSwipe={users.data[0]} />
            <CardsBtns
              swipeUserLeft={swipeUserLeft}
              swipeUserRight={swipeUserRight}
            />
          </div>
        ) : (
          <CardsEmpty />
        )}
      </section>
      {isMatch ? (
        <CardsPopUp onClose={closeMatch}>
          <CardsMatch matchedUser={matchedUser} />
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
