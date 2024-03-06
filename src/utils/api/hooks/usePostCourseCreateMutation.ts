import { useMutation } from '@tanstack/react-query';
import {
  PostCampusCourseCreateParams,
  postCreateGroupCourse,
} from '../requests/GroupsCampusCourses/create';

export const usePostCourseCreateMutation = (
  settings?: MutationSettings<PostCampusCourseCreateParams, typeof postCreateGroupCourse>,
) =>
  useMutation({
    mutationKey: ['postCourseCreate'],
    mutationFn: (params) => postCreateGroupCourse(params),
    ...settings?.options,
  });
