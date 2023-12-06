import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';

const ChatItem = ({ id, image, name }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const openChat = () => {
    searchParams.set('chatId', id);
    setSearchParams(searchParams);
  };

  return (
    <li
      onClick={openChat}
      className='flex items-center justify-between border-b border-light-border-1 dark:border-dark-border-1 py-3 active:bg-light-bg-2 dark:active:bg-dark-bg-2 md:hover:bg-light-bg-2 md:dark:hover:bg-dark-bg-2'
    >
      <div className='flex items-center gap-3'>
        <img
          src={image}
          className='h-14 w-14 rounded-full'
        />
        <h3 className='font-semibold text-light-text-1 dark:text-dark-text-1'>
          {name}
        </h3>
      </div>
      <button className='text-light-text-2 dark:text-dark-text-2'>
        <IoEllipsisVerticalSharp />
      </button>
    </li>
  );
};

export default ChatItem;
