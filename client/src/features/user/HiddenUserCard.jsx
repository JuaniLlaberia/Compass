import { IoEyeSharp } from 'react-icons/io5';
import { useUpdateUser } from './useUpdateUser';
import { ClipLoader } from 'react-spinners';

const HiddenUserCard = () => {
  const { updateUser, isUpdating } = useUpdateUser();

  return (
    <section className='flex flex-col items-center justify-center px-5 h-full'>
      <h1 className='font-semibold text-light-text-1 dark:text-dark-text-1 mb-3 lg:text-lg xl:text-2xl'>
        You profile is hidden
      </h1>
      <p className='text-sm text-light-text-2 dark:text-dark-text-2 mb-8 lg:text-base xl:text-lg'>
        This means that no user can see you but you can't see other users
        either. You can toggle this whenever you need a break.
      </p>
      <button
        aria-label='unhide user'
        onClick={() => updateUser({ hideUser: false })}
        className='flex justify-center items-center gap-3 min-w-[180px] font-semibold bg-gradient py-2 px-5 rounded-full text-dark-text-1 lg:py-2.5 lg:px-8'
      >
        {isUpdating ? (
          <ClipLoader
            size={24}
            color='white'
          />
        ) : (
          <>
            <IoEyeSharp size={24} />
            <span className='text-lg lg:text-xl'>Show account</span>
          </>
        )}
      </button>
    </section>
  );
};

export default HiddenUserCard;
