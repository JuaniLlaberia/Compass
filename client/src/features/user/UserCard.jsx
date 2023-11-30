import { useState } from 'react';
import {
  IoArrowDownCircle,
  IoLocationSharp,
  IoBriefcase,
  IoPeopleSharp,
} from 'react-icons/io5';
import defaultImg from '/default.jpg';

const UserCard = ({ userObj }) => {
  const [open, isOpen] = useState(false);

  return (
    <article className='relative bg-light-bg-1 top-6 w-full h-[60dvh] border border-light-border-1 rounded-lg shadow-sm'>
      <header
        className={`flex justify-center bg-secondary-1 ${
          open ? 'min-h-[80px]' : 'min-h-[130px]'
        } rounded-t-lg mb-20 transition-all duration-300`}
      >
        <img
          src={defaultImg}
          className={`${
            open ? 'w-32 h-32 top-4' : 'w-48 h-48 top-10'
          } absolute rounded-full border border-light-border-1 shadow-md transition-all duration-300`}
        />
      </header>
      <div className='absolute bottom-2.5 w-full flex items-center justify-between px-4'>
        <h2
          className={`${
            open ? 'text-xl' : 'text-2xl'
          } font-semibold text-light-text-1 transition-all duration-300`}
        >
          Juan I. Llaberia
        </h2>
        <button
          onClick={() => isOpen(prev => !prev)}
          className={`font-semibold text-secondary-1 ${
            open ? '' : 'rotate-180'
          } transition-all duration-300`}
        >
          <IoArrowDownCircle size={40} />
        </button>
      </div>
      <div className='h-44 overflow-x-hidden overflow-y-auto'>
        {/* <h3 className='text-sm text-center text-light-text-2 line-clamp-1 px-4'>
          Bartender, Bar manager & Security
        </h3> */}
        {/* <h3 className='flex items-center  gap-2 text-light-text-2 line-clamp-1 px-4'>
          <IoLocationSharp size={25} /> <span>Virrey Loreto 2464, CABA</span>
        </h3> */}
        <ul className='absolute bottom-28 flex gap-2 items-center flex-wrap px-3'>
          <li className='text-light-text-2 border border-secondary-1 py-0.5 px-3 rounded-full'>
            Bartender
          </li>
          <li className='text-light-text-2 border border-secondary-1 py-0.5 px-3 rounded-full'>
            Security
          </li>
          <li className='text-light-text-2 border border-secondary-1 py-0.5 px-3 rounded-full'>
            Chef
          </li>
          <li className='text-light-text-2 border border-light-border-1 py-0.5 px-3 rounded-full'>
            Bar Manager
          </li>
          {/* <li>See all</li> */}
        </ul>

        {/* <p className='px-4'>sssssss</p> */}
      </div>
    </article>
  );
};

export default UserCard;
