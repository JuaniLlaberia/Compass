import {
  IoCalendarOutline,
  IoPersonOutline,
  IoLocationOutline,
  IoInformation,
} from 'react-icons/io5';
import { differenceInYears } from 'date-fns';

const UserCardHeader = ({
  userInfo,
  categories,
  matchedCategories = [],
  isOpen = true,
  toggleOpen,
}) => {
  const { role, fullName, address, gender, birthDate, profileImage } = userInfo;

  const age = differenceInYears(new Date(), new Date(birthDate));

  const categoriesToRender = isOpen ? categories : matchedCategories;

  return (
    <>
      <section className='flex flex-col items-center'>
        <div className='relative'>
          <h1 className='mt-6 px-2.5 text-2xl lg:text-3xl text-light-text-1 dark:text-dark-text-1 drop-shadow font-semibold mb-3'>
            {fullName}
          </h1>
          <img
            src={profileImage}
            className='w-72 h-72 2xl:w-[30rem] 2xl:h-[30rem] rounded-xl border border-light-border-1 dark:border-dark-border-1'
          />
          {!isOpen ? (
            <button
              onClick={toggleOpen}
              className='absolute bottom-1 right-1 bg-secondary-1 text-dark-text-1 rounded-full'
            >
              <IoInformation size={28} />
            </button>
          ) : null}
        </div>
        {role === 'user' ? (
          <ul className='max-w-[18rem] 2xl:max-w-[30rem] w-full mt-5 p-2 text-light-text-1 dark:text-dark-text-1 border border-light-border-1 dark:border-dark-border-1 rounded-xl shadow-md'>
            <li className='flex justify-around py-2'>
              <h3 className='flex items-center gap-2 font-semibold text-xl 2xl:text-2xl'>
                <IoCalendarOutline />
                <span className='text-base xl:text-lg 2xl:text-xl'>{age}</span>
              </h3>
              <h3 className='flex items-center gap-2 font-semibold text-xl 2xl:text-2xl'>
                <IoPersonOutline />
                <span className='capitalize text-base xl:text-lg 2xl:text-xl'>
                  {gender}
                </span>
              </h3>
            </li>
          </ul>
        ) : (
          <ul className='max-w-[18rem] 2xl:max-w-[30rem] w-full mt-5 p-2 text-light-text-1 dark:text-dark-text-1 border border-light-border-1 dark:border-dark-border-1 rounded-xl shadow-md'>
            <li className='flex justify-around py-2'>
              <h3 className='flex items-center gap-2 font-semibold text-xl 2xl:text-2xl'>
                <IoLocationOutline />
                <span className='text-base line-clamp-1 2xl:text-lg'>
                  {address}
                </span>
              </h3>
            </li>
          </ul>
        )}
        <ul className='max-w-[18rem] 2xl:max-w-[30rem] w-full flex flex-wrap gap-2 mt-5 p-2 2xl:p-3 border border-light-border-1 dark:border-dark-border-1 rounded-xl shadow-md'>
          {categoriesToRender.map(cat => (
            <li
              key={cat}
              className={`border ${
                matchedCategories.includes(cat)
                  ? 'text-light-text-1 dark:text-dark-text-1 border-secondary-1'
                  : 'text-light-text-2 dark:text-dark-text-2 border-light-border-1 dark:border-dark-border-1'
              }  py-1 px-3 rounded-lg 2xl:text-xl 2xl:py-2 2xl:px-5`}
            >
              {cat}
            </li>
          ))}
          {!isOpen && toggleOpen ? (
            <li className='border text-light-text-2 dark:text-dark-text-2 border-light-border-1 dark:border-dark-border-1 py-1 px-3 rounded-lg 2xl:text-xl 2xl:py-2 2xl:px-5 active:bg-light-bg-2 dark:active:bg-dark-bg-2'>
              <button onClick={toggleOpen}>View All</button>
            </li>
          ) : null}
        </ul>
      </section>
    </>
  );
};

export default UserCardHeader;
