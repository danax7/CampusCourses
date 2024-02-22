import { Link } from 'react-router-dom';
import { Logo } from '..';
import { HEADER_LINKS } from '@/lib/constants/navigation/HEADER_LINKS';

export const Header = () => (
  <header className='flex md:px-10 py-4 border-b-2 px-4'>
    <div className='flex font-bold items-center mr-6'>
      <Logo />
      Campus Couses
    </div>
    <nav className='flex items-center gap-6 text-sm'>
      {HEADER_LINKS.map((link, index) => (
        <Link
          to={link.href}
          className='transition-colors hover:text-foreground/80 text-foreground/60 active:text-current'
          key={index}
        >
          <span>{link.text}</span>
        </Link>
      ))}
    </nav>
  </header>
);
