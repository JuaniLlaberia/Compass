const MatchItem = ({ match }) => {
  return (
    <li className='flex flex-col items-center min-w-[70px] cursor-pointer'>
      <img
        src={match.profileImage}
        className='h-16 w-16 rounded-full bg-light-bg-3 dark:bg-dark-bg-3'
      />
      <p>{match.fullName.split(' ')[0]}</p>
    </li>
  );
};

export default MatchItem;
