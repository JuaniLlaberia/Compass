import { Link } from 'react-router-dom';

export const CardsLink = ({ children, link }) => {
  return (
    <Link
      to={link}
      className='flex justify-center items-center gap-3 min-w-[180px] font-semibold bg-secondary-1 py-2 px-5 rounded-full text-dark-text-1'
    >
      {children}
    </Link>
  );
};
