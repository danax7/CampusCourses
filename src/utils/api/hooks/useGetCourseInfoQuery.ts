import { useQuery } from '@tanstack/react-query';
import { getCourseInfoById } from '../requests/GroupsCampusCourses/CourseInfo';

export const useGetCourseInfoByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['groupCourseDetailedInfo', id],
    queryFn: () => getCourseInfoById(id),
  });
};
