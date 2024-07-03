import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      },
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
