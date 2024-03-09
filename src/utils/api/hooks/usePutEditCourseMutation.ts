import { useMutation } from '@tanstack/react-query';
import {
  PutEditCourseParams,
  putEditCourse,
} from '../requests/GroupsCampusCourses/CourseInfo/InfoEdit';

export const usePutEditCourseMutation = (
  settings?: MutationSettings<PutEditCourseParams, typeof putEditCourse>,
) =>
  useMutation({
    mutationKey: ['putEditCourse'],
    mutationFn: (params) =>
      putEditCourse({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
