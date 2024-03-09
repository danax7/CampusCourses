import { useMutation } from '@tanstack/react-query';
import {
  PostCampusCourseCreateParams,
  postCreateGroupCourse,
} from '../requests/GroupsCampusCourses/create';

export const usePostCourseCreateMutation = (
  settings?: MutationSettings<PostCampusCourseCreateParams, typeof postCreateGroupCourse>,
) =>
  useMutation({
    mutationKey: ['postCreateGroupCourse'],
    mutationFn: (params) =>
      postCreateGroupCourse({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
