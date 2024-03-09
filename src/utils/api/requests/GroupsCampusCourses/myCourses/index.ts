import { api } from '@/utils/api/instance';

export const getMyCourses = async () => {
  return api.get<CampusCourseDto[]>('/courses/my');
};
