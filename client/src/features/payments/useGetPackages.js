import { useQuery } from '@tanstack/react-query';
import { getPackages } from '../../server_api/paymentsAPI';

export const useGetPackages = () => {
  const { data: packages, isLoading } = useQuery({
    queryKey: ['packages'],
    queryFn: getPackages,
    staleTime: 100000000,
  });

  return { packages, isLoading };
};
