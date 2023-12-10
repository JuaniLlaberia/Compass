import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { deleteMatch } from '../../server_api/chatsAPI';

export const useDeleteMatch = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: cancelMatch, isLoading } = useMutation({
    mutationFn: () => deleteMatch(searchParams.get('chatId')),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chats'] });
      queryClient.invalidateQueries({ queryKey: ['my-matches'] });
      navigate('/chats');
    },
    onError: () => {
      toast.error('Failed to cancel match');
    },
  });

  return { cancelMatch, isLoading };
};
