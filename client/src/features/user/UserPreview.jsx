import UserCardHeader from '../../components/UserCardHeader';

const UserPreview = ({ userData }) => {
  return (
    <>
      <div className='flex flex-col items-center pb-4'>
        <UserCardHeader
          userInfo={userData}
          categories={userData?.category}
        />
        <div className='max-w-[18rem] 2xl:max-w-[30rem] w-full gap-2 mt-5 p-2 px-3 border border-light-border-1 dark:border-dark-border-1 rounded-xl shadow-md'>
          <h3 className='font-semibold text-light-text-2 2xl:text-xl'>About</h3>
          <p className='text-light-text-1 dark:text-dark-text-1 px-1 2xl:text-lg'>
            {userData?.summary}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserPreview;
