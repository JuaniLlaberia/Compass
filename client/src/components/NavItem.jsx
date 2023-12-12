import { NavLink } from 'react-router-dom';

const NavItem = ({ link, icon }) => {
  return (
    <li>
      <NavLink
        aria-label='navigation link'
        to={link}
        className='text-dark-text-2'
      >
        <span className='text-2xl md:text-3xl'>{icon}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
