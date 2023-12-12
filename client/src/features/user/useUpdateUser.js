import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateUser as updateUserAPI } from '../../server_api/userAPI';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: userInfo => updateUserAPI(userInfo),
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['auth-user'] });
      queryClient.setQueryData('auth-user', data?.data);
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating };
};
