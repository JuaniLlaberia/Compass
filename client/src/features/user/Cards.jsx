import UserCard from './UserCard';

const Cards = ({ users, swipeRight, swipeLeft }) => {
  return (
    <div>
      <UserCard />
      {/* {users.map(user => (
        <div key={user._id}>
          <button
            className='w-full p-3 border bg-dark-bg-1 text-dark-text-1'
            // onClick={() => test(user._id)}
          >
            {user._id}
          </button>
        </div>
      ))} */}
    </div>
  );
};

export default Cards;
