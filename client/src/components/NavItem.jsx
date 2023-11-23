import { NavLink } from 'react-router-dom';

const NavItem = ({ link, icon }) => {
  return (
    <li>
      <NavLink
        to={link}
        className='text-[#89868a]'
      >
        {icon}
      </NavLink>
    </li>
  );
};

export default NavItem;
