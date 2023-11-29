import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../server_api/userAPI';

export const useGetUsers = () => {
  const {
    data: users,
    refetch,
    isRefetching,
    isLoading,
    error,
  } = useQuery({ queryKey: ['users'], queryFn: getUsers, staleTime: 0 });

  return { users, isLoading, isRefetching, refetch, error };
};
