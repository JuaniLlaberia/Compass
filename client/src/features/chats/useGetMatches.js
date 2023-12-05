import { useQuery } from '@tanstack/react-query';
import { getMatches } from '../../server_api/userAPI';

export const useGetMatches = () => {
  const { data: matches, isLoading } = useQuery({
    queryKey: ['my-matches'],
    queryFn: getMatches,
  });

  return { matches, isLoading };
};
