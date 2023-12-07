import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { ClipLoader } from 'react-spinners';
import Button from '../../components/Button';
import CancelMatchModal from './CancelMatchModal';
import Message from './Message';
import { useGetMessages } from './useGetMessages';

export const Conversation = ({
  chatId,
  sendMessage,
  messages,
  inputField,
  setInputField,
  recipientUser,
  reference,
  setMessages,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { messages: fetchedMessages, isLoading } = useGetMessages();
  const { _id: recipientId, fullName, profileImage } = recipientUser;

  const closeChat = () => {
    searchParams.set('chatId', '');
    setSearchParams(searchParams);
    setMessages([]);
  };

  useEffect(() => {
    if (!isLoading) {
      setMessages(fetchedMessages.data);
      setTimeout(() => {
        reference?.current?.scrollIntoView();
      }, 1);
    }
  }, [fetchedMessages]);

  if (chatId !== searchParams.get('chatId')) return null;

  return (
    <section className='fixed top-0 left-0 z-[100] bg-light-bg-1 dark:bg-dark-bg-1 w-full h-full'>
      <nav className='flex justify-between items-center py-2 px-4 border-b border-light-border-1 dark:border-dark-border-1'>
        <button
          onClick={closeChat}
          className='text-secondary-1'
        >
          <IoArrowBackOutline size={22} />
        </button>
        <div className='flex items-center gap-3'>
          <img
            src={profileImage}
            className='h-8 w-8 rounded-full'
          />
          <h1 className='text-light-text-1 dark:text-dark-text-1'>
            {fullName}
          </h1>
        </div>
        <CancelMatchModal />
      </nav>
      {isLoading ? (
        <section className='flex flex-col h-[83dvh] justify-center items-center text-light-text-1 dark:text-dark-text-1'>
          <ClipLoader />
          <h6>Retrieving messages</h6>
        </section>
      ) : (
        <section className=''>
          <ul className='flex flex-col gap-2 py-1 px-3 h-[83dvh] overflow-y-scroll'>
            {messages.map((msg, i) => (
              <Message
                key={i}
                text={msg.message}
                recipientId={recipientId}
                sender={msg.sender}
              />
            ))}
            <li ref={reference}></li>
          </ul>
        </section>
      )}
      <form
        onSubmit={sendMessage}
        className='absolute bottom-1 w-full flex items-center gap-3 px-3 py-2 bg-light-bg-2 dark:bg-dark-bg-2 border-t border-light-border-1 dark:border-dark-border-1'
      >
        <input
          placeholder='Write your message...'
          disabled={isLoading}
          className='bg-light-bg-1 dark:bg-dark-bg-1 w-full text-base rounded-md p-2.5 text-light-text-1 dark:text-dark-text-1 focus:outline-none border border-light-border-1 dark:border-dark-border-1 focus:border-secondary-1 dark:focus:border-secondary-1 md:hover:bg-light-bg-2'
          value={inputField}
          onChange={e => setInputField(e.target.value)}
        />
        <Button disabled={isLoading}>Send</Button>
      </form>
    </section>
  );
};
