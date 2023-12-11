import Chats from '../features/chats/Chats';
import MatchesChats from '../features/chats/ChatsConversation';
import Matches from '../features/chats/Matches';
import { ChatProvider } from '../context/ChatsContext';

const ChatsPage = () => {
  return (
    <ChatProvider>
      <section className='relative h-full md:pb-3'>
        <MatchesChats>
          <MatchesChats.Sidebar>
            <MatchesChats.List title='Matches'>
              <Matches />
            </MatchesChats.List>
            <MatchesChats.List title='Chats'>
              <Chats />
            </MatchesChats.List>
          </MatchesChats.Sidebar>
          <MatchesChats.Conversation />
        </MatchesChats>
      </section>
    </ChatProvider>
  );
};

export default ChatsPage;
