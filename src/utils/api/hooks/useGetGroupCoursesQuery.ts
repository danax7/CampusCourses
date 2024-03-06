import { useQuery } from '@tanstack/react-query';
import { getGroupCoursesById } from '../requests/GroupsCampusCourses/getAll';

export const useGetGroupCoursesByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['groupCourses', id],
    queryFn: () => getGroupCoursesById(id),
  });
};
