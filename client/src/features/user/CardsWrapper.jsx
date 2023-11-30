import { ClipLoader } from 'react-spinners';
import Cards from './Cards';
import { useGetUsers } from './useGetUsers';
import { useSwipeRight } from './useSwipeRight';
import { useSwipeLeft } from './useSwipeLeft';
import { useEffect, useState } from 'react';

const CardsWrapper = () => {
  const { users, isLoading, refetch, error } = useGetUsers();
  const { swipeRight } = useSwipeRight();
  const { swipeLeft } = useSwipeLeft();
  const [userQueue, setUserQueue] = useState([]);

  useEffect(() => {
    if (users && users.data.length > 0) {
      setUserQueue(prev => [...prev, ...users.data]);
    }
  }, [users]);

  const swipeUserRight = () => {
    //Remove user from screen
    const swipedUser = userQueue.shift();
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
    swipeLeft(users.data[0]._id, {
      onSuccess: () => {
        //Fetch more users
        refetch();
        // users.data.shift();
      },
    });
  };

  return (
    <section className='relative'>
      {isLoading ? (
        <ClipLoader />
      ) : userQueue.length !== 0 && !isLoading ? (
        <Cards users={userQueue} />
      ) : (
        'EMPTY'
      )}
      <div className='fixed bottom-20 left-0 flex justify-center items-center gap-10 w-full'>
        <button
          onClick={swipeUserRight}
          className='w-16 h-16 border rounded-full'
        >
          X
        </button>
        <button
          onClick={swipeUserLeft}
          className='w-16 h-16 border rounded-full'
        >
          X
        </button>
        <button className='w-16 h-16 border rounded-full'>X</button>
      </div>
    </section>
  );
};

export default CardsWrapper;
