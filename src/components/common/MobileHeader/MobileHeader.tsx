import { Button } from '@/components/ui';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  selectIsAuthenticated,
  selectUserEmail,
  selectUserRoles,
} from '@/utils/AuthSlice/slice';
import { getNavigationLinksByUserRole } from '@/utils/helpers/getNavigationLinksByRole';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHeader } from '../Header/hooks/useHeader';
import { MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

export const MobileHeader = () => {
  const isAuth = useSelector(selectIsAuthenticated);
  const email = useSelector(selectUserEmail);
  const role = useSelector(selectUserRoles);
  const { handleLogout } = useHeader();
  const links = getNavigationLinksByUserRole(role);
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <Sheet open={isSheetOpen}>
        <SheetTrigger onClick={() => setSheetOpen(true)}>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent onInteractOutside={() => setSheetOpen(false)}>
          <SheetHeader className='h-full'>
            <div className='flex justify-end'>
              <X className='h-4 w-4' onClick={() => setSheetOpen(false)} />
            </div>
            <SheetTitle>Список страниц</SheetTitle>
            <SheetDescription className='h-full flex flex-col'>
              <nav className='items-center text-sm flex-auto justify-between flex-col space-y-4 my-6 '>
                {isAuth &&
                  links!.map((link, index) => (
                    <div>
                      <Link
                        to={link.href}
                        className='transition-colors hover:text-foreground/80 text-foreground/60 active:text-current'
                        key={index}
                        onClick={() => setSheetOpen(false)}
                      >
                        <span>{link.text}</span>
                      </Link>
                    </div>
                  ))}
              </nav>
              {!isAuth && (
                <div className='flex gap-2 items-center'>
                  <Button onClick={() => setSheetOpen(false)}>
                    <Link to={'/registration'}>
                      <span>Зарегестрироваться</span>
                    </Link>
                  </Button>
                  <Button>
                    <Link to={'/login'} onClick={() => setSheetOpen(false)}>
                      <span>Войти</span>
                    </Link>
                  </Button>
                </div>
              )}
              {isAuth && (
                <div className='flex gap-2 items-center'>
                  <Button onClick={() => setSheetOpen(false)}>
                    <Link to={'/profile'}>
                      <span>{email}</span>
                    </Link>
                  </Button>
                  <Button onClick={handleLogout}>
                    <span>Выйти</span>
                  </Button>
                </div>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
