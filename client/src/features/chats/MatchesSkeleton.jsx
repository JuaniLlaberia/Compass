const MatchesSkeleton = ({ amount = 5 }) => {
  return (
    <ul
      aria-label='component placeholder'
      className='flex gap-3 w-[90dvw] overflow-scroll py-3'
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
