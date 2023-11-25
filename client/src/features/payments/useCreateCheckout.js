import { useMutation } from '@tanstack/react-query';
import { createCheckout } from '../../server_api/paymentsAPI';

export const useCreateCheckout = () => {
  const { mutate: checkout, isLoading } = useMutation({
    mutationFn: packageId => createCheckout(packageId),
    onSuccess: data => {
      window.location = data.link;
    },
    onError: () => {},
  });

  return { checkout, isLoading };
};
