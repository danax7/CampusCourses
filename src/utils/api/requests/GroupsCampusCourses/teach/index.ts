import { api } from '@/utils/api/instance';

export const getTeachCourses = async () => {
  return api.get<CampusCourseDto[]>('/courses/teaching');
};
