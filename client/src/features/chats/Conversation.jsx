import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IoArrowBackOutline, IoSend } from 'react-icons/io5';
import { ClipLoader } from 'react-spinners';
import CancelMatchModal from './CancelMatchModal';
import Message from './Message';
import { useGetMessagesInf } from './useGetMessagesInf';

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
  const [page, setPage] = useState(1);
  const isFirstRender = useRef(true);

  const {
    messages: fetchedMessages,
    isLoading,
    refetch,
    isRefetching,
    hasMorePages,
  } = useGetMessagesInf({ page });

  const { _id: recipientId, fullName, profileImage } = recipientUser;

  const closeChat = () => {
    searchParams.set('chatId', '');
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setMessages([]);
    setPage(1);
  }, [searchParams.get('chatId')]);

  useEffect(() => {
    if (!isLoading && !isRefetching) {
      const newMessages = fetchedMessages.data.reverse();
      setMessages(prev => [...newMessages, ...prev]);

      if (isFirstRender.current) {
        isFirstRender.current = false;
        setTimeout(() => {
          reference?.current?.scrollIntoView();
        }, 1);
      }
    }
  }, [fetchedMessages, isRefetching]);

  const getMoreMessages = () => {
    setPage(prev => prev + 1);
    setTimeout(() => {
      refetch();
    }, 1);
  };

  if (chatId !== searchParams.get('chatId')) return null;

  return (
    <section className='flex flex-col h-full'>
      <nav className='flex justify-between bg-light-bg-1 dark:bg-dark-bg-1 md:bg-light-bg-2 md:dark:bg-dark-bg-2 items-center py-2 px-4 border-b border-light-border-1 dark:border-dark-border-1 shadow-sm'>
        <button
          onClick={closeChat}
          className='text-secondary-1'
        >
          <IoArrowBackOutline size={22} />
        </button>
        <div className='flex items-center gap-3'>
          <img
            src={profileImage}
            className='h-8 w-8 rounded-full lg:h-10 lg:w-10 xl:h-12 xl:w-12'
          />
          <h1 className='text-light-text-1 dark:text-dark-text-1 lg:text-lg'>
            {fullName}
          </h1>
        </div>
        <CancelMatchModal />
      </nav>

      <section className='flex-grow overflow-y-auto'>
        {isLoading || isRefetching ? (
          <section className='flex flex-col justify-center items-center h-full text-[gray]'>
            <ClipLoader color='gray' />
            <h6>Retrieving messages</h6>
          </section>
        ) : messages.length >= 1 ? (
          <>
            <ul className='flex flex-col flex-grow gap-1 py-1 px-2 overflow-y-auto'>
              <li className='flex justify-center'>
                {hasMorePages ? (
                  <button
                    className='text-light-text-2 dark:text-dark-text-2'
                    onClick={getMoreMessages}
                  >
                    Load More
                  </button>
                ) : isLoading || isRefetching ? (
                  <ClipLoader color='gray' />
                ) : null}
              </li>

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
          </>
        ) : (
          <div className='flex flex-col gap-3 justify-center items-center h-full px-8'>
            <h5 className='text-light-text-1 dark:text-dark-text-1 text-lg lg:text-xl'>
              New Match with{' '}
              <span className='font-semibold text-xl lg:text-2xl'>
                {fullName.split(' ')[0]}
              </span>
            </h5>
            <img
              src={profileImage}
              className='w-24 h-24 rounded-full lg:w-32 lg:h-32'
            />
            <p className='text-center text-light-text-2 dark:text-dark-text-2 lg:text-lg'>
              Be the first one to talk, dont't be shy!
            </p>
          </div>
        )}
      </section>

      <form
        onSubmit={sendMessage}
        className='flex items-center gap-3 p-1.5'
      >
        <input
          placeholder='Write your message...'
          disabled={isLoading}
          className='bg-light-bg-1 dark:bg-dark-bg-1 w-full text-base rounded-2xl p-2.5 pr-[3.5rem] text-light-text-1 dark:text-dark-text-1 focus:outline-none border border-light-border-1 dark:border-dark-border-1 focus:border-secondary-1 dark:focus:border-secondary-1 placeholder:text-light-text-2 dark:placeholder:text-dark-text-2 md:hover:bg-light-bg-2 lg:py-3 lg:pr-[4.25rem] lg:placeholder:text-lg lg:text-lg transition-colors'
          value={inputField}
          onChange={e => setInputField(e.target.value)}
        />
        <button
          disabled={isLoading}
          className='absolute right-5 font-semibold text-secondary-1 lg:text-xl lg:right-7'
        >
          <span className='md:hidden'>
            <IoSend size={25} />
          </span>
          <span className='hidden md:block'>Send</span>
        </button>
      </form>
    </section>
  );
};
