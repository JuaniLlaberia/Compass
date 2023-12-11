import {
  IoSendSharp,
  IoChatbubbleEllipsesSharp,
  IoPerson,
} from 'react-icons/io5';
import NavItem from './NavItem';

const items = [
  {
    link: '/app',
    icon: <IoSendSharp />,
    label: 'Home',
  },
  {
    link: '/chats',
    icon: <IoChatbubbleEllipsesSharp />,
    label: 'Chats',
  },
  {
    link: '/profile',
    icon: <IoPerson />,
    label: 'Profile',
  },
];

const MainNav = () => {
  return (
    <nav>
      <ul className='w-full h-16 fixed bottom-0 z-50 flex justify-around items-center md:justify-center md:gap-48'>
        {items.map(item => (
          <NavItem
            key={item.link}
            link={item.link}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
