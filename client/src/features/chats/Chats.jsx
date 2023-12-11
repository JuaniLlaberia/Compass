import React from 'react';
import ChatsSekelon from './ChatsSkeleton';
import UserItem from './UserItem';
import { useGetChats } from './useGetChats';

const Chats = () => {
  const { chats, isLoading } = useGetChats();

  return (
    <>
      {isLoading ? (
        <ChatsSekelon />
      ) : chats.data.length >= 1 ? (
        <ul>
          {chats.data.map(chat => (
            <UserItem
              key={chat._id}
              onlineUsers={[]}
              chatId={chat._id}
              isActive={chat.isActive}
              recipientUser={chat.userData[0]}
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
