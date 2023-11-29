import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { swipeLeft as swipeLeftAPI } from '../../server_api/userAPI';

export const useSwipeLeft = () => {
  const { mutate: swipeLeft, isLoading } = useMutation({
    mutationFn: userId => swipeLeftAPI(userId),
    onError: () => toast.error('Something went wrong. Please try again.'),
  });

  return { swipeLeft, isLoading };
};
