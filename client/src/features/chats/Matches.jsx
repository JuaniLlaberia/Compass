import MatchItem from './MatchItem';
import MatchesSkeleton from './MatchesSkeleton';
import { useGetMatches } from './useGetMatches';

const Matches = () => {
  const { matches, isLoading } = useGetMatches();

  return (
    <section>
      <h2 className='text-light-text-1 dark:text-dark-text-1 font-semibold'>
        Matches
      </h2>

      {isLoading ? (
        <MatchesSkeleton />
      ) : matches.data.length >= 1 ? (
        <ul className='flex gap-3 w-[90dvw] overflow-scroll py-3'>
          {matches.data.map(match => (
            <MatchItem
              key={match._id}
              match={match}
            />
          ))}
        </ul>
      ) : (
        <p className='py-4 px-2 text-light-text-2 dark:text-dark-text-2'>
          No matches available. Keep swiping!
        </p>
      )}
    </section>
  );
};

export default Matches;
