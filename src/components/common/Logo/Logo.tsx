import logo from '@/assets/react.svg';
import { cn } from '@/utils';
import React from 'react';

interface LogoProps extends React.ComponentPropsWithRef<'img'> {}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(({ className }) => (
  <img src={logo} alt='logo' className={cn('w-7', className)} />
));
