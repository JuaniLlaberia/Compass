import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createCheckout } from '../../server_api/paymentsAPI';

export const useCreateCheckout = () => {
  const { mutate: checkout } = useMutation({
    mutationFn: packageId => createCheckout(packageId),
    onSuccess: data => {
      window.location = data.link;
    },
    onError: () => {
      toast.error('Something went wrong. Please try again.');
    },
  });

  return { checkout };
};
