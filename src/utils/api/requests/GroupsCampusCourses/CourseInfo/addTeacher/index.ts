import { api } from '@/utils/api/instance';

export type PostAddTeacherMutationParams = {
  courseId: string;
  data: AddTeacherDto;
};

export const postAddTeacher = async ({
  courseId,
  data,
  config,
}: {
  courseId: string;
  data: AddTeacherDto;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: any;
}) => {
  return api.post(`courses/${courseId}/teachers`, data, {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
