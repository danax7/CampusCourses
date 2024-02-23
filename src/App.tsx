import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/common/Header/Header';
import { QueryProvider } from './utils/contexts/QueryProvider';

const TOASTER_DURATION = 5000;

export const App = () => (
  <QueryProvider>
      <div className='min-h-screen'>
        <Header />
        <Outlet />
        <Toaster duration={TOASTER_DURATION} />
      </div>
  </QueryProvider>
);
