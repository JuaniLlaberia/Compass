import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getMessages } from '../../server_api/chatsAPI';

export const useGetMessages = () => {
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get('chatId');

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages', chatId],
    queryFn: () => getMessages(chatId),
    staleTime: 10000,
  });

  return { messages, isLoading };
};
