import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getMessages } from '../../server_api/chatsAPI';

export const useGetMessagesInf = ({ page }) => {
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get('chatId');

  const {
    data: messages,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['messages', chatId],
    queryFn: () => getMessages({ chatId, page }),
    refetchOnWindowFocus: false,
  });

  return {
    messages,
    isLoading,
    refetch,
    isRefetching,
    hasMorePages: page < messages?.pages,
  };
};
