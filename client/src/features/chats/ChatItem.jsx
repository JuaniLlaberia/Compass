import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CancelMatchModal from './CancelMatchModal';
import { Conversation } from './Conversation';
import { useAuthContext } from '../../context/AuthContext';

const ChatItem = ({ chatId, recipientUser }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [inputField, setInputField] = useState('');
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const ref = useRef(null);

  const { user } = useAuthContext();

  const openChat = () => {
    searchParams.set('chatId', chatId);
    setSearchParams(searchParams);
  };

  //Web socket actions
  const handleWSActivity = e => {
    const socketData = JSON.parse(e.data);
    if ('online' in socketData) {
      setOnlineUsers(socketData.online);
    } else {
      setMessages(prev => [...prev, JSON.parse(e.data)]);
    }
  };

  const sendMessage = e => {
    e.preventDefault();

    if (inputField === '') return;

    const message = {
      sender: user.data._id,
      recipient: recipientUser._id,
      chatId,
      message: inputField,
    };

    ws.send(JSON.stringify(message));
    setMessages(prev => [...prev, message]);
    setInputField('');

    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 1);
  };

  //Handle web socket initialization and actions
  useEffect(() => {
    //Connecting to web socket
    const ws = new WebSocket('ws://localhost:8000');
    setWs(ws);

    ws.addEventListener('message', handleWSActivity);
    ws.addEventListener('close', () => {
      //Try to re connect user if connection is lost
      //Calling the above code again (maybe set a timeout after x time or do an interval to run 2/3 times and if it fails disconect)
    });

    //Disconect connection when the chat gets close
    // return () => {
    //   ws.close();
    //   setWs(null);
    // };
  }, []);

  return (
    <>
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
        <CancelMatchModal />
      </li>

      {searchParams.get('chatId') ? (
        <Conversation
          reference={ref}
          inputField={inputField}
          setInputField={setInputField}
          messages={messages}
          setMessages={setMessages}
          chatId={chatId}
          sendMessage={sendMessage}
          recipientUser={recipientUser}
        />
      ) : null}
    </>
  );
};

export default ChatItem;
