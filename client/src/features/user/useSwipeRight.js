import { useMutation } from '@tanstack/react-query';
import { swipeRight as swipeRightAPI } from '../../server_api/userAPI';

export const useSwipeRight = () => {
  const { mutate: swipeRight, isLoading } = useMutation({
    mutationFn: userId => swipeRightAPI(userId),
    onSuccess: () => {},
    onError: () => {},
  });

  return { swipeRight, isLoading };
};
