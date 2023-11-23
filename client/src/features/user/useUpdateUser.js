import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser as updateUserAPI } from '../../server_api/userAPI';
import { useNavigate } from 'react-router-dom';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: userInfo => updateUserAPI(userInfo),
    onSuccess: data => {
      queryClient.setQueryData('auth-user', data?.data);
      navigate('/app');
    },
    onError: () => {},
  });

  return { updateUser, isUpdating };
};
