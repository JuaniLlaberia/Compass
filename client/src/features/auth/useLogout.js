import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../server_api/authAPI';
import { toast } from 'sonner';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth-user'] });
      navigate('/');
    },
    onError: () => {
      toast.error('Something went wrong!');
    },
  });

  return { logout, isLoading };
};
