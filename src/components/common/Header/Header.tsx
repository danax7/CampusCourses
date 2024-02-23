import { Link } from 'react-router-dom';
import { Logo } from '..';
import { getNavigationLinksByUserRole } from '@/utils/helpers/getNavigationLinksByRole';
import { Button } from '@/components/ui';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUserEmail, selectUserRoles } from '@/utils/AuthSlice/slice';
import { useHeader } from './hooks/useHeader';

export const Header = () => {
const isAuth = useSelector(selectIsAuthenticated);
const email = useSelector(selectUserEmail);
const role = useSelector(selectUserRoles);
const { handleLogout } = useHeader();
const links = getNavigationLinksByUserRole(role);

return (
  <header className='flex md:px-10 py-4 border-b-2 px-4'>
  <div className='flex font-bold items-center mr-6'>
    <Logo />
    Campus Couses
  </div>
  <nav className='flex items-center gap-6 text-sm flex-auto justify-between'>
    {isAuth && (
      links.map((link, index) => (
        <div>
          <Link
            to={link.href}
            className='transition-colors hover:text-foreground/80 text-foreground/60 active:text-current'
            key={index}
          >
            <span>{link.text}</span>
          </Link>
        </div>
      ))
    )}
  </nav>
  {!isAuth && (
      <div className='space-x-2'>
        <Button>
          <Link
          to={'/registration'}
          >
            <span>Зарегестрироваться</span>
          </Link>
        </Button>
        <Button>
          <Link
          to={'/login'}
          >
            <span>Войти</span>
          </Link>
        </Button>
      </div>
    )}
     {isAuth && (
      <div className='space-x-2'>
        <Button>
          <Link
          to={'/profile'}
          >
            <span>{email}</span>
          </Link>
        </Button>
        <Button onClick={handleLogout}>
          <span>Выйти</span>
        </Button>
      </div>
    )}
  </header>
  )
}
