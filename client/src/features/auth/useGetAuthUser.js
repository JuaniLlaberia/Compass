import { useQuery } from '@tanstack/react-query';
import { getAuthUser } from '../../server_api/authAPI';

export const useGetAuthUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['auth-user'],
    queryFn: getAuthUser,
    // staleTime: 100
  });

  return { user, isLoading };
};
