import { STUDENT_LINKS, TEACHER_AND_STUDENT_LINKS, TEACHER_LINKS, USER_LINKS } from "../constants/navigation";

export const getNavigationLinksByUserRole = (userRole: UserRolesResponse) => {
  const { isStudent, isTeacher
    //  isAdmin 
    } = userRole;

  if (isStudent && isTeacher) {
    return TEACHER_AND_STUDENT_LINKS;
  } else if (!isStudent && !isTeacher) {
    return USER_LINKS;
  } else if (isTeacher) {
    return TEACHER_LINKS;
  } else if (isStudent) {
    return STUDENT_LINKS;
  }

  return null; 
};
