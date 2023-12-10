import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { swipeRight as swipeRightAPI } from '../../server_api/userAPI';

export const useSwipeRight = () => {
  const [isMatch, setIsMatch] = useState(false);
  const [isLikesError, setIsLikeError] = useState(false);

  const closeMatch = () => setIsMatch(false);
  const closeError = () => setIsLikeError(false);

  const { mutate: swipeRight, isLoading } = useMutation({
    mutationFn: userId => swipeRightAPI(userId),
    onSuccess: data => setIsMatch(data.match),
    onError: err => {
      if (err.message === 'You have no more likes') setIsLikeError(true);
      toast.error(err.message);
    },
  });

  return {
    swipeRight,
    isLoading,
    isMatch,
    closeMatch,
    isLikesError,
    closeError,
  };
};
