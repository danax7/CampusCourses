import { ADMIN_LINKS } from './../constants/navigation/adminLinks';


export const getNavigationLinksByUserRole = (userRole: UserRole) => {
  switch (userRole) {
    case 'admin':
      return ADMIN_LINKS;
    default:
      throw new Error('Invalid user role');
  }
};
