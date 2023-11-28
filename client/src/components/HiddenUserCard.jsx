import { IoEyeSharp } from 'react-icons/io5';
import { useUpdateUser } from '../features/user/useUpdateUser';
import { ClipLoader } from 'react-spinners';

const HiddenUserCard = () => {
  const { updateUser, isUpdating } = useUpdateUser();

  return (
    <section className='flex flex-col items-center justify-center px-5 h-full'>
      <h1 className='font-semibold text-light-text-1 dark:text-dark-text-1 mb-3'>
        You profile is hidden
      </h1>
      <p className='text-sm text-light-text-2 dark:text-dark-text-2 mb-8'>
        This means that no user can see you but you can't see other users
        either. You can toggle this whenever you need a break.
      </p>
      <button
        onClick={() => updateUser({ hideUser: false })}
        className='flex justify-center items-center gap-3 min-w-[180px] font-semibold bg-secondary-1 py-2 px-5 rounded-full text-dark-text-1'
      >
        {isUpdating ? (
          <ClipLoader
            size={24}
            color='white'
          />
        ) : (
          <>
            <IoEyeSharp size={24} />
            <span className='text-lg'>Show account</span>
          </>
        )}
      </button>
    </section>
  );
};

export default HiddenUserCard;
