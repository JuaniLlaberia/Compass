import logo from '/logo_color.svg';
import logoWhite from '/logo_white.svg';
import { Link } from 'react-router-dom';

const Logo = ({ withText = true, size, withColor = true }) => {
  return (
    <Link to='/' className='flex justify-center items-center gap-2'>
      <img
        className={`${size === 'small' ? 'w-8 h-8' : 'w-14 h-14'}`}
        src={withColor ? logo : logoWhite}
        draggable={false}
      />
      {withText && (
        <h1
          className={`${
            size === 'small' ? 'text-xl' : 'text-3xl'
          } font-semibold ${
            withColor
              ? 'bg-gradient-to-r to-fuchsia-500 from-purple-500 bg-clip-text text-transparent'
              : 'text-white'
          } `}
        >
          Compass
        </h1>
      )}
    </Link>
  );
};

export default Logo;
