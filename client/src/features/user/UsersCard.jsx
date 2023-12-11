import { useState } from 'react';
import { IoArrowDownCircle, IoLocationSharp } from 'react-icons/io5';
import { differenceInYears } from 'date-fns';

const UsersCard = ({ userData, categories, matchedCategories }) => {
  const [open, isOpen] = useState(false);
  const { role, fullName, address, gender, birthDate, profileImage, summary } =
    userData;

  return (
    <div className='relative bg-light-bg-1 dark:bg-dark-bg-1 top-6 lg:top-10 w-full h-[60dvh] max-w-[600px] border border-light-border-1 dark:border-dark-border-1 rounded-lg shadow-sm'>
      <header
        className={`flex justify-center bg-secondary-1 ${
          open ? 'min-h-[80px]' : 'min-h-[130px]'
        } rounded-t-lg transition-all duration-300`}
      >
        <img
          src={profileImage}
          className={`${
            open ? 'w-28 h-28 top-2 ' : 'w-72 h-72 top-10'
          } absolute shadow-md transition-all duration-300 bg-light-bg-3 dark:bg-dark-bg-3`}
        />
      </header>
      <section className='absolute bottom-2.5 w-full flex items-center justify-between px-4 lg:px-6 lg:bottom-4'>
        <h2
          className={`${
            open ? '' : 'text-2xl'
          } font-semibold text-light-text-1 dark:text-dark-text-1 transition-all duration-300 lg:text-3xl`}
        >
          {open ? '' : fullName}
        </h2>
        <button
          onClick={() => isOpen(prev => !prev)}
          className={`font-semibold text-secondary-1 ${
            open ? '' : 'rotate-180'
          } transition-all duration-300`}
        >
          <IoArrowDownCircle size={40} />
        </button>
      </section>
      <section
        className={`overflow-x-hidden overflow-y-auto ${
          open ? 'h-[300px] pt-12' : 'h-56 pt-28'
        }`}
      >
        <h2 className='px-2 mb-2 font-semibold text-light-text-2 dark:text-dark-text-2 lg:text-xl'>
          {role === 'business' ? 'We are hiring?' : 'My Experience'}
        </h2>
        <ul className='flex gap-2 items-center flex-wrap px-2 mt-2 lg:px-4'>
          {categories.map(cat => (
            <li
              key={cat}
              className={`text-light-text-2 dark:text-dark-text-2 border ${
                matchedCategories.includes(cat)
                  ? 'border-secondary-1'
                  : 'border-light-border-1 dark:border-dark-border-1'
              }  py-0.5 px-3 rounded-full lg:py-1 lg:px-5 lg:text-lg`}
            >
              {cat}
            </li>
          ))}
        </ul>
        {open ? (
          <>
            <>
              <h2 className='px-2 mt-3 lg:mt-5 font-semibold text-light-text-2 dark:text-dark-text-2 lg:text-xl'>
                Summary
              </h2>
              <p className='text-sm px-2 text-light-text-1 dark:text-dark-text-1 lg:text-base lg:px-4'>
                {summary}
              </p>
            </>
            {role === 'business' ? (
              <>
                <h2 className='px-2 mb-3 font-semibold text-light-text-2 dark:text-dark-text-2 lg:text-xl'>
                  Location
                </h2>
                <p className='text-sm px-2 flex items-center gap-1 text-light-text-1 dark:text-dark-text-1'>
                  <IoLocationSharp
                    size={18}
                    className='text-light-text-2 dark:text-dark-text-2'
                  />{' '}
                  <span>{address}</span>
                </p>
              </>
            ) : (
              <>
                <h2 className='px-2 mt-2 font-semibold text-light-text-2 dark:text-dark-text-2 lg:text-xl'>
                  Gender
                </h2>
                <p className='px-2 capitalize text-light-text-1 dark:text-dark-text-1'>
                  {gender}
                </p>

                <h2 className='px-2 mt-2 font-semibold text-light-text-2 dark:text-dark-text-2 lg:text-xl'>
                  Age
                </h2>
                <p className='px-2 text-light-text-1 dark:text-dark-text-1'>
                  {differenceInYears(new Date(), new Date(birthDate))} years old
                </p>
              </>
            )}
          </>
        ) : null}
      </section>
    </div>
  );
};

export default UsersCard;
