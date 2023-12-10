const UserItem = ({ isActive, openChat, recipientUser, onlineUsers }) => {
  return (
    <>
      {isActive ? (
        <li
          onClick={openChat}
          className='flex items-center justify-between border-b border-light-border-1 dark:border-dark-border-1 py-3 active:bg-light-bg-2 dark:active:bg-dark-bg-2 md:hover:bg-light-bg-2 md:dark:hover:bg-dark-bg-2'
        >
          <div className='flex items-center gap-3'>
            <div className='relative'>
              <img
                src={recipientUser.profileImage}
                className='h-14 w-14 rounded-full'
              />
              <div
                className={`absolute bottom-0 right-0 h-4 w-4 rounded-full ${
                  onlineUsers.includes(recipientUser._id)
                    ? 'bg-green-500'
                    : 'bg-gray-400'
                }`}
              ></div>
            </div>
            <h3 className='font-semibold text-light-text-1 dark:text-dark-text-1'>
              {recipientUser.fullName}
            </h3>
          </div>
        </li>
      ) : (
        <li
          onClick={openChat}
          className='flex flex-col items-center min-w-[70px] cursor-pointer'
        >
          <img
            src={recipientUser.profileImage}
            className='h-16 w-16 rounded-full bg-light-bg-3 dark:bg-dark-bg-3'
          />
          <p>{recipientUser.fullName.split(' ')[0]}</p>
        </li>
      )}
    </>
  );
};

export default UserItem;
