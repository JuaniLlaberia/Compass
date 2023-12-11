import { NavLink } from 'react-router-dom';

const NavItem = ({ link, icon, label }) => {
  return (
    <li>
      <NavLink
        to={link}
        className='md:flex md:flex-col md:items-center text-light-text-2 dark:text-dark-text-2'
      >
        <span className='text-2xl md:text-3xl'>{icon}</span>
        <span className='hidden md:block md:cursor-pointer md:text-lg xl:text-xl'>
          {label}
        </span>
      </NavLink>
    </li>
  );
};

export default NavItem;
