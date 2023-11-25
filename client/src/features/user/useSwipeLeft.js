import { useMutation } from '@tanstack/react-query';
import { swipeLeft as swipeLeftAPI } from '../../server_api/userAPI';

export const useSwipeLeft = () => {
  const { mutate: swipeLeft, isLoading } = useMutation({
    mutationFn: userId => swipeLeftAPI(userId),
    onSuccess: () => {},
    onError: () => {},
  });

  return { swipeLeft, isLoading };
};
