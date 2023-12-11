import { cloneElement, createContext, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { IoMail } from 'react-icons/io5';
import { useAuthContext } from '../../context/AuthContext';
import { Conversation as ConversationPage } from './Conversation';
import { useChatContext } from '../../context/ChatsContext';

const MatchesChatsContext = createContext();

//Chat component
const MatchesChats = ({ children }) => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  //Web socket actions
  const handleWSActivity = e => {
    const socketData = JSON.parse(e.data);
    if ('online' in socketData) {
      setOnlineUsers(socketData.online);
    } else {
      setMessages(prev => [...prev, JSON.parse(e.data)]);
    }
  };

  //Handle web socket initialization and actions => When we enter the chats page we create the connection via scokets and it gets close when we leave
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
    <MatchesChatsContext.Provider
      value={{ messages, setMessages, ws, onlineUsers }}
    >
      <main className='flex h-full w-full border-b border-light-border-1 dark:border-dark-border-1'>
        {children}
      </main>
    </MatchesChatsContext.Provider>
  );
};

//Layout component to make chat responsive
const Sidebar = ({ children }) => {
  return (
    <aside className='relative w-full md:w-auto border-r border-light-border-1 dark:border-dark-border-1'>
      {children}
    </aside>
  );
};

//Reusalbe list component => Accepts children so the list can be style as needed
const List = ({ children, title }) => {
  const { onlineUsers } = useContext(MatchesChatsContext);

  return (
    <section>
      <h3 className='px-2 mt-2 font-semibold text-lg text-light-text-2 dark:text-dark-text-2 xl:text-xl'>
        {title}
      </h3>
      {cloneElement(children, { online: onlineUsers })}
    </section>
  );
};

//Chat/Conversation page
const Conversation = ({}) => {
  const [searchParams] = useSearchParams();
  const [inputField, setInputField] = useState('');
  const { setMessages, messages, ws } = useContext(MatchesChatsContext);

  const { user } = useAuthContext();
  const { recipientUser, isChatActive } = useChatContext();

  const chatRef = useRef(null);

  const chatIdToRender = searchParams.get('chatId') || '';

  //Create and send message via socket to the backend
  const sendMessage = e => {
    e.preventDefault();

    if (inputField === '') return;

    const message = {
      sender: user.data._id,
      chatId: chatIdToRender,
      message: inputField,
      recipient: recipientUser?._id,
      isChatActive,
    };

    ws.send(JSON.stringify(message));
    setMessages(prev => [...prev, message]);
    setInputField('');

    setTimeout(() => {
      chatRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 1);
  };

  return (
    <>
      {chatIdToRender ? (
        <section className='fixed bottom-0 left-0 h-full w-full bg-light-bg-1 dark:bg-dark-bg-1 z-[100] md:relative'>
          <>
            <ConversationPage
              reference={chatRef}
              inputField={inputField}
              setInputField={setInputField}
              messages={messages}
              setMessages={setMessages}
              sendMessage={sendMessage}
              chatId={chatIdToRender}
              recipientUser={recipientUser}
            />
          </>
        </section>
      ) : (
        <section className='hidden w-full h-full md:flex md:flex-col md:justify-center md:items-center'>
          <h6 className='flex items-center gap-1.5 font-semibold text-lg text-light-text-1 dark:text-dark-text-1 xl:text-xl'>
            <IoMail size={22.5} />
            Your messages
          </h6>
          <p className='text-light-text-2 dark:text-dark-text-2 xl:text-lg'>
            Start a conversation by openning one of your chats
          </p>
        </section>
      )}
    </>
  );
};

MatchesChats.Sidebar = Sidebar;
MatchesChats.List = List;
MatchesChats.Conversation = Conversation;

export default MatchesChats;
