import { IoChatbubbleEllipsesSharp, IoPerson } from 'react-icons/io5';
import { TbCardsFilled } from 'react-icons/tb';

import NavItem from './NavItem';

const items = [
  {
    link: '/app',
    icon: <TbCardsFilled />,
  },
  {
    link: '/chats',
    icon: <IoChatbubbleEllipsesSharp />,
  },
  {
    link: '/profile',
    icon: <IoPerson />,
  },
];

const MainNav = () => {
  return (
    <nav>
      <ul className='w-full h-16 fixed bg-dark-bg-2 bottom-0 z-50 flex justify-around items-center md:justify-center md:gap-48'>
        {items.map(item => (
          <NavItem
            aria-label='navigation link'
            key={item.link}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
