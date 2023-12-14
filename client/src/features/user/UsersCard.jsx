import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose, IoFlagOutline } from 'react-icons/io5';
import UserCardHeader from '../../components/UserCardHeader';

const UsersCard = ({ userData, categories, matchedCategories }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className={`${
          open
            ? 'px-10 fixed h-screen w-full bg-light-bg-1 dark:bg-dark-bg-1 z-[100] overflow-y-auto pb-4'
            : ''
        }`}
      >
        <UserCardHeader
          userInfo={userData}
          categories={categories}
          matchedCategories={matchedCategories}
          isOpen={open}
          toggleOpen={() => setOpen(true)}
        />
        {open && (
          <>
            <button
              onClick={() => setOpen(false)}
              className='absolute top-2.5 right-2.5 text-2xl lg:text-3xl md:hover:scale-110 transition-all text-light-text-1 dark:text-dark-text-1'
            >
              <IoClose />
            </button>
            <div className='flex flex-col items-center'>
              <div className='max-w-[18rem] 2xl:max-w-[30rem] w-full gap-2 mt-5 p-2 px-3 border border-light-border-1 dark:border-dark-border-1 rounded-xl shadow-md'>
                <h3 className='font-semibold text-light-text-2 2xl:text-xl'>
                  About
                </h3>
                <p className='text-light-text-1 dark:text-dark-text-1 px-1 2xl:text-lg'>
                  {userData.summary}
                </p>
              </div>
              <Link
                to='/app/report'
                className='flex items-center gap-1 py-2 px-5 font-semibold mt-4 border border-light-border-1 dark:border-dark-border-1 rounded-xl bg-dark-bg-2 text-dark-text-1 2xl:gap-2 2xl:text-xl 2xl:mt-8 2xl:py-3 2xl:px-10 active:bg-dark-bg-3'
              >
                <IoFlagOutline size={20} />
                Report
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default UsersCard;
