import { useMutation } from '@tanstack/react-query';
import {
  PutEditCourseDescriptionParams,
  PutEditCourseDescription,
} from '../requests/GroupsCampusCourses/CourseInfo/editCourseDescription';

export const usePutEditCourseDescriptionMutation = (
  settings?: MutationSettings<
    PutEditCourseDescriptionParams,
    typeof PutEditCourseDescription
  >,
) =>
  useMutation({
    mutationKey: ['putEditCourseDescription'],
    mutationFn: (params) =>
      PutEditCourseDescription({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
