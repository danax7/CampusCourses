import { useMutation } from '@tanstack/react-query';
import {
  PostSignUpForCourseParams,
  signUpForCourse,
} from '../requests/GroupsCampusCourses/signUpForCourse';

export const usePostSignUpForCourseMutation = (
  settings?: MutationSettings<PostSignUpForCourseParams, typeof signUpForCourse>,
) =>
  useMutation({
    mutationKey: ['signUpForCourse'],
    mutationFn: (params) =>
      signUpForCourse({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
