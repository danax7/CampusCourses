import { api } from '@/utils/api/instance';

export interface PostSignUpForCourseParams {
  id: string;
}

export const signUpForCourse = async ({ id }: PostSignUpForCourseParams) => {
  return api.post(
    `courses/${id}/sign-up`,
    {},
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  );
};
