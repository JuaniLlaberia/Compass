import ChatItem from './ChatItem';
import ChatsSekelon from './ChatsSkeleton';
import { useGetChats } from './useGetChats';

const Chats = () => {
  const { chats, isLoading } = useGetChats();

  return (
    <>
      <h2 className='text-light-text-1 dark:text-dark-text-1 font-semibold'>
        Chats
      </h2>
      {isLoading ? (
        <ChatsSekelon />
      ) : chats.data.length >= 1 ? (
        <ul className='my-3'>
          {chats.data.map(chat => (
            <ChatItem
              key={chat._id}
              chatId={chat._id}
              recipientUser={chat.userData[0]}
              isActive={chat.isActive}
            />
          ))}
        </ul>
      ) : (
        <p className='py-4 px-2 text-light-text-2 dark:text-dark-text-2'>
          No chats available. Start chatting now.
        </p>
      )}
    </>
  );
};

export default Chats;
