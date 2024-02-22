import { ROUTES } from '../routes';

interface NavigationLinkInfo {
  text: string;
  href: string;
}

export const HEADER_LINKS: NavigationLinkInfo[] = [
  {
    text: 'Группы курсов',
    href: ROUTES.COURSESGROUPS,
  },
  {
    text: 'Мои курсы',
    href: ROUTES.MYCOURSES,
  },
  {
    text: 'Преподаваемые курсы',
    href: ROUTES.TEACHCOURSES,
  },
  {
    text: 'Профиль',
    href: ROUTES.PROFILE,
  },
];
