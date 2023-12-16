import { NavLink } from 'react-router-dom';
import { IoChevronForward, IoOpenOutline } from 'react-icons/io5';

const SettingsItem = ({ icon, label, link, redirects, handleClick }) => {
  return (
    <li
      className='border-b border-light-border-1 dark:border-dark-border-1 hover:bg-light-bg-2 dark:hover:bg-dark-bg-2 transition-colors'
      onClick={handleClick}
    >
      <NavLink
        to={link}
        className='flex w-full p-3 items-center justify-between hover:text-secondary-1 text-light-text-1 dark:text-dark-text-1'
      >
        <div className='flex items-center gap-2'>
          {icon}
          <p className='text-lg 2xl:text-xl font-semibold'>{label}</p>
        </div>
        {redirects ? <IoOpenOutline /> : <IoChevronForward />}
      </NavLink>
    </li>
  );
};

export default SettingsItem;
