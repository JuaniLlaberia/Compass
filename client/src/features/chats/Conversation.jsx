import { IoArrowBackOutline, IoEllipsisVerticalSharp } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Conversation = ({ name }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const closeChat = () => {
    searchParams.set('chatId', '');
    setSearchParams(searchParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Message sent');
  };

  return (
    <section className='fixed top-0 left-0 z-[100] bg-light-bg-1 w-full h-full'>
      <nav className='flex justify-between items-center py-2 px-4'>
        <button onClick={closeChat}>
          <IoArrowBackOutline size={22} />
        </button>
        <h1>Chat</h1>
        <button>
          <IoEllipsisVerticalSharp />
        </button>
      </nav>
      <ul className='flex'></ul>
      <form
        onSubmit={handleSubmit}
        className='absolute bottom-1 w-full flex items-center gap-3 px-3'
      >
        <Input />
        <Button>Send</Button>
      </form>
    </section>
  );
};
