const MatchesSkeleton = ({ amount = 6 }) => {
  return (
    <ul
      aria-label='component placeholder'
      className='flex gap-3 w-full overflow-y-hidden overflow-x-auto py-3 scrollbar-thin scrollbar-thumb-light-border-1 scrollbar-track-light-bg-2 dark:scrollbar-thumb-dark-border-1 dark:scrollbar-track-dark-bg-2 scrollbar-corner-transparent'
    >
      {Array(amount)
        .fill(0)
        .map((_, i) => (
          <li
            key={i}
            className='h-16 w-16 rounded-full min-w-[65px] bg-slate-300 animate-pulse'
          ></li>
        ))}
    </ul>
  );
};

export default MatchesSkeleton;
