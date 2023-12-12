import React from 'react';
import MatchesSkeleton from './MatchesSkeleton';
import UserItem from './UserItem';
import { useGetMatches } from './useGetMatches';

const Matches = () => {
  const { matches, isLoading } = useGetMatches();

  return (
    <section className='w-full md:w-[450px] flex gap-3 px-2 overflow-y-hidden overflow-x-auto'>
      {isLoading ? (
        <MatchesSkeleton />
      ) : matches.data.length >= 1 ? (
        <ul className='flex gap-3 w-[90dvw] overflow-y-hidden overflow-x-auto py-3'>
          {matches.data.map(match => (
            <UserItem
              key={match._id}
              isActive={match.isActive}
              recipientUser={match.userData[0]}
              onlineUsers={[]}
              chatId={match._id}
            />
          ))}
        </ul>
      ) : (
        <p className='py-4 px-2 text-light-text-2 dark:text-dark-text-2'>
          No matches available. Keep on with your search.
        </p>
      )}
    </section>
  );
};

export default Matches;
