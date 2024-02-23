import { STUDENT_LINKS, TEACHER_AND_STUDENT_LINKS, TEACHER_LINKS, USER_LINKS } from "../constants/navigation";

export const getNavigationLinksByUserRole = (userRole: UserRole) => {
  switch (userRole) {
    case 'teacherAndStudent':
      return TEACHER_AND_STUDENT_LINKS;
    case 'user':
      return USER_LINKS;
    case 'teacher':
      return TEACHER_LINKS;
    case 'student':
      return STUDENT_LINKS;
    case 'guest':
      return ;
    default:
      throw new Error('Invalid user role');
  }
};
