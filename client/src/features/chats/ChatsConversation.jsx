import React from 'react';
import Chats from './Chats';
import Matches from './Matches';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Conversation } from './Conversation';
import { useAuthContext } from '../../context/AuthContext';
// import UserItem from './UserItem';

const ChatsConversation = () => {
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
      isChatActive: isActive,
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

    //Disconect connection when the chat gets close
    return () => {
      ws.close();
      setWs(null);
    };
  }, []);

  return (
    <section className='flex  h-full border-b'>
      <div className='w-[500px] border-r border-green-500'>
        <Matches />
        <Chats />
      </div>
      {searchParams.get('chatId') ? (
        <div className='w-full'>
          <Conversation
            reference={ref}
            inputField={inputField}
            setInputField={setInputField}
            messages={messages}
            setMessages={setMessages}
            chatId={searchParams.get('chatId')}
            sendMessage={sendMessage}
            recipientUser={''}
          />
        </div>
      ) : (
        <div className='w-full'>Start chatting</div>
      )}
    </section>
  );
};

export default ChatsConversation;
