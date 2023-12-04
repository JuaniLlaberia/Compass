import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { swipeRight as swipeRightAPI } from '../../server_api/userAPI';

export const useSwipeRight = () => {
  const { mutate: swipeRight, isLoading } = useMutation({
    mutationFn: userId => swipeRightAPI(userId),
    onSuccess: data => {
      console.log(data.match ? 'We have a match' : 'No match');
    },
    onError: () => toast.error('Something went wrong. Please try again.'),
  });

  return { swipeRight, isLoading };
};
