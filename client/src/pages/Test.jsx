const Test = ({ users, swipeLeft, refetch, swipeRight }) => {
  const test = async userId => {
    users.shift();

    swipeRight(userId, {
      onSuccess: async () => {
        refetch();
      },
    });
  };

  return (
    <div>
      {users.map(user => (
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
