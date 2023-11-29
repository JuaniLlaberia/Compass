import { useGetUsers } from './useGetUsers';
import { useSwipeRight } from './useSwipeRight';
import { useSwipeLeft } from './useSwipeLeft';

const Test = () => {
  const { users, isLoading, refetch, isRefetching, error } = useGetUsers();
  const { swipeRight } = useSwipeRight();
  const { swipeLeft } = useSwipeLeft();

  console.log('mounting cards component');

  if (isLoading) return <h1>Loading</h1>;
  if (users.data.length === 0) return <p>Empty!!!</p>;

  const test = async userId => {
    users.data.shift();

    swipeRight(userId, {
      onSuccess: async () => {
        refetch();
      },
    });
  };

  return (
    <div>
      {users.data.map(user => (
        <div key={user._id}>
          <button
            className='w-full p-3 border bg-dark-bg-1 text-dark-text-1'
            onClick={() => test(user._id)}
          >
            {user._id}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Test;
