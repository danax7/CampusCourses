import { api } from '@/utils/api/instance';

export type PostAddTeacherMutationParams = {
  courseId: string;
  data: AddTeacherDto;
};

export const postAddTeacher = async ({
  params,
  config,
}: RequestParams<PostAddTeacherMutationParams>) =>
  api.post(`courses/${params.courseId}/teachers`, params.data, config);
