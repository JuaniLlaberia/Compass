import { useSearchParams } from 'react-router-dom';
import ChatItem from './ChatItem';
import ChatsSekelon from './ChatsSkeleton';
import defaultImg from '/default.jpg';
import { Conversation } from './Conversation';

const chats = [
  {
    id: 1,
    image: defaultImg,
    name: 'John Lopez',
  },
  {
    id: 2,
    image: defaultImg,
    name: 'Carlos Raul',
  },
  {
    id: 3,
    image: defaultImg,
    name: 'David Laid',
  },
];

const isLoading = false;

const Chats = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <h2 className='text-light-text-1 dark:text-dark-text-1 font-semibold'>
        Chats
      </h2>

      {isLoading ? (
        <ChatsSekelon />
      ) : chats.length >= 1 ? (
        <ul className='my-3'>
          {chats.map(chat => (
            <ChatItem
              key={chat.id}
              id={chat.id}
              image={chat.image}
              name={chat.name}
            />
          ))}
        </ul>
      ) : (
        <p className='py-4 px-2 text-light-text-2 dark:text-dark-text-2'>
          No chats available. Start chatting now.
        </p>
      )}
      {searchParams.get('chatId') ? <Conversation /> : null}
    </>
  );
};

export default Chats;
