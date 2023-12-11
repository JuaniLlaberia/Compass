import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [recipientUser, setRecipientUser] = useState({});
  const [isChatActive, setIsChatActive] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        recipientUser,
        setRecipientUser,
        isChatActive,
        setIsChatActive,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);
