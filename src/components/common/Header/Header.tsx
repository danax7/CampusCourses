import { Link } from 'react-router-dom';
import { Logo } from '..';
import { getNavigationLinksByUserRole } from '@/utils/helpers/getNavigationLinksByRole';
import { Button } from '@/components/ui';
import { useSelector } from 'react-redux';
import {
  selectIsAuthenticated,
  selectUserEmail,
  selectUserRoles,
} from '@/utils/AuthSlice/slice';
import { useHeader } from './hooks/useHeader';
import { MobileHeader } from '../MobileHeader/MobileHeader';

export const Header = () => {
  const isAuth = useSelector(selectIsAuthenticated);
  const email = useSelector(selectUserEmail);
  const role = useSelector(selectUserRoles);
  const { handleLogout } = useHeader();
  const links = getNavigationLinksByUserRole(role);

  return (
    <header className='flex md:px-10 py-4 border-b-2 px-4 justify-between'>
      <div className='flex w-full md:w-auto justify-between'>
        <Link to='' className='flex'>
          <div className='flex font-bold items-center mr-3'>
            <Logo />
            <span>Campus Courses</span>
          </div>
        </Link>
        <nav className='hidden items-center gap-6 text-sm flex-auto justify-between md:flex'>
          {isAuth &&
            links!.map((link, index) => (
              <div>
                <Link
                  to={link.href}
                  className='transition-colors hover:text-foreground/80 text-foreground/60 active:text-current'
                  key={index}
                >
                  <span>{link.text}</span>
                </Link>
              </div>
            ))}
        </nav>
        <MobileHeader />
      </div>
      <div className='hidden md:block'>
        {!isAuth && (
          <div className='space-x-2 flex'>
            <Button>
              <Link to={'/registration'}>
                <span>Зарегестрироваться</span>
              </Link>
            </Button>
            <Button>
              <Link to={'/login'}>
                <span>Войти</span>
              </Link>
            </Button>
          </div>
        )}
        {isAuth && (
          <div className='space-x-2 flex'>
            <Button>
              <Link to={'/profile'}>
                <span>{email}</span>
              </Link>
            </Button>
            <Button onClick={handleLogout}>
              <span>Выйти</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
