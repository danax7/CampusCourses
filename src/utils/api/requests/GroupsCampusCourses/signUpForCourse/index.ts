import { api } from '@/utils/api/instance';

export interface PostSignUpForCourseParams {
  id: string;
}

export const signUpForCourse = async ({
  params,
  config,
}: RequestParams<PostSignUpForCourseParams>) =>
  api.post(`courses/${params.id}/sign-up`, config);
