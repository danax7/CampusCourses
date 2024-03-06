import { useQuery } from '@tanstack/react-query';
import { getTeachCourses } from '../requests/GroupsCampusCourses/teach';

export const useGetTeachCoursesQuery = (
  settings?: QuerySettings<typeof getTeachCourses>,
) => {
  return useQuery({
    queryKey: ['getTeachCourses'],
    queryFn: getTeachCourses,
    ...settings?.options,
  });
};
