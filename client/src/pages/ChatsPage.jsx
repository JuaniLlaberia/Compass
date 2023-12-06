import Matches from '../features/chats/Matches';
import Chats from '../features/chats/Chats';

const ChatsPage = () => {
  return (
    <section className='relative h-full'>
      <Matches />
      <Chats />
    </section>
  );
};

export default ChatsPage;
