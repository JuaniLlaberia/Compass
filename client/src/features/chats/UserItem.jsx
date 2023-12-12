import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useChatContext } from '../../context/ChatsContext';

const UserItem = ({ isActive, chatId, recipientUser, onlineUsers }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setRecipientUser, setIsChatActive } = useChatContext();

  const openChat = () => {
    searchParams.set('chatId', chatId);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setRecipientUser(recipientUser);
    setIsChatActive(isActive);
  }, []);

  return (
    <>
      {isActive ? (
        <li
          onClick={openChat}
          className={`flex items-center justify-between px-3 border-b border-light-border-1 dark:border-dark-border-1 py-3 active:bg-light-bg-2 dark:active:bg-dark-bg-2 md:hover:bg-light-bg-2 md:dark:hover:bg-dark-bg-2 ${
            searchParams.get('chatId') === chatId
              ? 'bg-light-bg-2 dark:bg-dark-bg-2'
              : ''
          } cursor-pointer`}
        >
          <div className='flex items-center gap-3 lg:gap-4'>
            <div className='relative'>
              <img
                alt='user profile photo'
                src={recipientUser.profileImage}
                className='h-14 w-14 rounded-full lg:h-16 lg:w-16'
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
            alt='user profile photo'
            src={recipientUser.profileImage}
            className='h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-light-bg-3 dark:bg-dark-bg-3'
          />
          <p className='text-light-text-1 dark:text-dark-text-1'>
            {recipientUser.fullName?.split(' ')[0]}
          </p>
        </li>
      )}
    </>
  );
};

export default UserItem;
