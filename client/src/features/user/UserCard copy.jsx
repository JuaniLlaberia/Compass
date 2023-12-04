import defaultImg from '/default.jpg';

const UserCard = ({ userObj }) => {
  return (
    <article className='absolute bg-light-bg-1 top-6 w-full h-[60dvh] border border-light-border-1 rounded-lg shadow-sm'>
      <header className='flex justify-center bg-secondary-1 min-h-[80px] rounded-t-lg mb-20'>
        <img
          src={defaultImg}
          className='w-32 h-32 absolute rounded-full top-4 border border-light-border-1 shadow-md'
        />
      </header>
      <h2 className='text-lg font-semibold text-center text-light-text-1'>
        Juan Ignacio Llaberia
      </h2>
      <h3 className='text-sm text-center text-light-text-2 line-clamp-1 px-4'>
        Bartender, Bar manager & Security
      </h3>
      <p className='px-4'>sssssss</p>
    </article>
  );
};

export default UserCard;
