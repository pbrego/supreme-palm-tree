import * as React from 'react';
import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './utils/react-query';
import { UsersPage } from './features/users';

export const ErrorHandlingAppExample = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersPage />
      {/* {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />} */}
    </QueryClientProvider>
  );
};
