import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/common/Header/Header';
import { QueryProvider } from './utils/contexts/QueryProvider';
import { store } from './utils/store/store';
import { Provider } from "react-redux";

const TOASTER_DURATION = 5000;

export const App = () => {
  return (
    <Provider store={store}>
      <QueryProvider>
        <div className='min-h-screen'>
          <Header />
          <Outlet />
          <Toaster duration={TOASTER_DURATION} />
        </div>
       </QueryProvider>
    </Provider>
  )
}
