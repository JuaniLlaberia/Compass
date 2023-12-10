import { useQuery } from '@tanstack/react-query';
import { getChats } from '../../server_api/chatsAPI';

export const useGetChats = () => {
  const { data: chats, isLoading } = useQuery({
    queryKey: ['chats'],
    queryFn: getChats,
  });

  return { chats, isLoading };
};
