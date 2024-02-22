import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/common/Header/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryProvider } from './utils/contexts/QueryProvider';

const TOASTER_DURATION = 5000;
const queryClient = new QueryClient();


export const App = () => (

  <QueryProvider>
    {/* <QueryClientProvider client={queryClient}> */}
      <div className='min-h-screen'>
        <Header />
        <Outlet />
        <Toaster duration={TOASTER_DURATION} />
      </div>
    {/* </QueryClientProvider> */}
  </QueryProvider>
);
