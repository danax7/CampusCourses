import React from 'react';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const queryClient = React.useMemo(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
        queryCache: new QueryCache({
          onError: (error) => {
            const responseError = error as ResponseError;

            if (responseError?.response?.status === 401) {
              localStorage.clear();
              navigate('/login');
            }

            toast.error(responseError.response.data.message, {
              cancel: { label: 'Close' },
            });
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            const responseError = error as ResponseError;

            if (responseError?.response?.status === 401) {
              localStorage.clear();
              navigate('/login');
            }

            toast.error(responseError?.response?.data.message, {
              cancel: { label: 'Close' },
            });
          },
        }),
      }),
    [],
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
