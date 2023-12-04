import { useState } from 'react';
import { IoArrowDownCircle, IoLocationSharp } from 'react-icons/io5';
import defaultImg from '/default.jpg';

const BusinessCard = ({ userToSwipe, userCategories }) => {
  const [open, isOpen] = useState(false);
  const { fullName, address, category, profileImage, summary } = userToSwipe;

  const matchedCategories = userCategories.filter(cat =>
    category.includes(cat)
  );

  const categoriesToRender = category.sort(cat =>
    matchedCategories.includes(cat) ? -1 : 1
  );

  return (
    <article className='relative bg-light-bg-1 dark:bg-dark-bg-1 top-6 w-full h-[60dvh] border border-light-border-1 dark:border-dark-border-1 rounded-lg shadow-sm'>
      <header
        className={`flex justify-center bg-secondary-1 ${
          open ? 'min-h-[80px]' : 'min-h-[130px]'
        } rounded-t-lg transition-all duration-300`}
      >
        <img
          src={defaultImg}
          className={`${
            open ? 'w-28 h-28 top-2' : 'w-48 h-48 top-10'
          } absolute rounded-full border border-light-border-1 shadow-md transition-all duration-300`}
        />
      </header>
      <div className='absolute bottom-2.5 w-full flex items-center justify-between px-4'>
        <h2
          className={`${
            open ? '' : 'text-2xl'
          } font-semibold text-light-text-1 dark:text-dark-text-1 transition-all duration-300`}
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
      </div>
      <div
        className={` overflow-x-hidden overflow-y-auto ${
          open ? 'h-[300px] pt-12' : 'h-56 pt-28'
        }`}
      >
        <section className='mb-3'>
          <h2 className='px-2 font-semibold text-light-text-2 dark:text-dark-text-2'>
            We are hiring?
          </h2>
          <ul className='flex gap-2 items-center flex-wrap px-2 mt-2'>
            {categoriesToRender.map(cat => (
              <li
                key={cat}
                className={`text-light-text-2 dark:text-dark-text-2 border ${
                  matchedCategories.includes(cat)
                    ? 'border-secondary-1'
                    : 'border-light-border-1 dark:border-dark-border-1'
                }  py-0.5 px-3 rounded-full`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </section>
        {open ? (
          <>
            <section className='mb-3'>
              <h2 className='px-2 font-semibold text-light-text-2 dark:text-dark-text-2'>
                Summary
              </h2>
              <p className='text-sm px-2 text-light-text-1 dark:text-dark-text-1'>
                {summary}
              </p>
            </section>
            <section className='mb-3'>
              <h2 className='px-2 font-semibold text-light-text-2 dark:text-dark-text-2'>
                Location
              </h2>
              <p className='text-sm px-2 flex items-center gap-1 text-light-text-1 dark:text-dark-text-1'>
                <IoLocationSharp
                  size={18}
                  className='text-light-text-2 dark:text-dark-text-2'
                />{' '}
                <span>{address}</span>
              </p>
            </section>
          </>
        ) : null}
      </div>
    </article>
  );
};

export default BusinessCard;
