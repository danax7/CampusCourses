import { useMutation } from '@tanstack/react-query';
import {
  PostEditCourseStatusParams,
  postEditCourseStatus,
} from '../requests/GroupsCampusCourses/CourseInfo/StatusEdit';

export const usePostEditCourseStatusMutation = (
  settings?: MutationSettings<PostEditCourseStatusParams, typeof postEditCourseStatus>,
) =>
  useMutation({
    mutationKey: ['postEditCourseStatus'],
    mutationFn: (params) =>
      postEditCourseStatus({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
