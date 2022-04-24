import { QueryClient } from 'react-query';

const defaultQueryClientOptions = {
  queries: {
    onError: (error: any) => console.log('react query default error', error),
    onSuccess: (ok: any) => console.log('react query default ok', ok),
    refetchOnReconnect: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
