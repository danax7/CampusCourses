import { api } from '@/utils/api/instance';

export const getGroupCoursesById = async (id: string) => {
  const response = await api.get<CampusCourseDto[]>(`/groups/${id}`);
  return response.data;
};
