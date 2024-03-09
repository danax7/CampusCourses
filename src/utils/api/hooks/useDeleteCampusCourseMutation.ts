import { useMutation } from '@tanstack/react-query';
import { DeleteCourseParams, deleteCourse } from '../requests/GroupsCampusCourses/delete';

export const useDeleteCampusCourseMutation = (
  settings?: MutationSettings<DeleteCourseParams, typeof deleteCourse>,
) =>
  useMutation({
    mutationKey: ['deleteCourse'],
    mutationFn: (params) =>
      deleteCourse({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
