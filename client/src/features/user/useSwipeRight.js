import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { swipeRight as swipeRightAPI } from '../../server_api/userAPI';

export const useSwipeRight = () => {
  const [isMatch, setIsMatch] = useState(false);
  const [isLikesError, setIsLikeError] = useState(false);
  const [matchedUser, setMatchedUser] = useState({});

  const closeMatch = () => setIsMatch(false);
  const closeError = () => setIsLikeError(false);

  const { mutate: swipeRight, isLoading } = useMutation({
    mutationFn: user => swipeRightAPI(user),
    onSuccess: data => {
      if (data.match) {
        setMatchedUser({
          fullName: data.matchedUser.fullName,
          image: data.matchedUser.profileImage,
        });
      }
      setIsMatch(data.match);
    },
    onError: err => {
      if (err.message === 'You have no more likes') setIsLikeError(true);
      toast.error(err.message);
    },
  });

  return {
    swipeRight,
    isLoading,
    isMatch,
    matchedUser,
    closeMatch,
    isLikesError,
    closeError,
  };
};
