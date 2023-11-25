import {
  IoSendSharp,
  IoNotifications,
  IoChatbubbleEllipsesSharp,
  IoPerson,
} from 'react-icons/io5';
import NavItem from './NavItem';

const items = [
  {
    link: '/app',
    icon: <IoSendSharp size={25} />,
  },
  {
    link: '/notifications',
    icon: <IoNotifications size={25} />,
  },
  {
    link: '/chats',
    icon: <IoChatbubbleEllipsesSharp size={25} />,
  },
  {
    link: '/profile',
    icon: <IoPerson size={25} />,
  },
];

const MainNav = () => {
  return (
    <nav>
      <ul className='w-full h-14 fixed bottom-0 z-50 flex justify-around items-center '>
        {items.map(item => (
          <NavItem key={item.link} link={item.link} icon={item.icon} />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
