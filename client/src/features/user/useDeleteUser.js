import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../server_api/userAPI';

export const useDeleteUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deleteAccount, isDeleting } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      navigate('/');
      queryClient.invalidateQueries({ queryKey: ['auth-user'] });
    },
    onError: () => {},
  });

  return { deleteAccount, isDeleting };
};
