import Chats from '../features/chats/Chats';
import MatchesChats from '../features/chats/ChatsConversation';
import Matches from '../features/chats/Matches';
import { ChatProvider } from '../context/ChatsContext';

const ChatsPage = () => {
  return (
    <ChatProvider>
      <section className='relative h-full'>
        <MatchesChats>
          <MatchesChats.Sidebar>
            <MatchesChats.List title='Matches'>
              <div className='w-full md:w-[450px] flex gap-3 py-3 px-2 overflow-y-hidden overflow-x-auto'>
                <Matches />
              </div>
            </MatchesChats.List>
            <MatchesChats.List title='Chats'>
              <div className='flex flex-col gap-1 py-3 overflow-hidden'>
                <Chats />
              </div>
            </MatchesChats.List>
          </MatchesChats.Sidebar>
          <MatchesChats.Conversation />
        </MatchesChats>
      </section>
    </ChatProvider>
  );
};

export default ChatsPage;
