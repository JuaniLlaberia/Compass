import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
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
    onError: () => toast.error('Something went wrong. Please try again.'),
  });

  return { deleteAccount, isDeleting };
};
