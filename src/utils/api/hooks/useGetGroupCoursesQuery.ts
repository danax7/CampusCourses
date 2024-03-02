
import { useQuery } from '@tanstack/react-query';
import { getGroupCoursesById } from '../requests/GroupsCampusCourses/getAll';



// export const useGetGroupCoursesQuery = (settings?: QuerySettings<typeof getGroupCoursesById>) =>
//   { 
//     return (
//       useQuery({
//         queryKey: ['getGroupCourses'],
//         queryFn: getGroupCoursesById,
//         ...settings?.options
//       })
//     )
//   }


// export const useGetGroupCoursesByIdQuery = (
//   id: string,
//   settings?: QuerySettings<typeof getGroupCoursesById>
// ) => {
//   return useQuery({
//     queryKey: ['getGroupCourses', { id }],
//     queryFn: () => getGroupCoursesById(id),
//     ...settings?.options,
//   });
// };

export const useGetGroupCoursesByIdQuery = (id: string) => {
  return useQuery({
      queryKey: ['groupCourses', id],
      queryFn: () => getGroupCoursesById(id),
  });
};