import { api } from '@/utils/api/instance';

export interface DeleteCourseParams {
  id: string;
}

export const deleteCourse = async ({
  params,
  config,
}: RequestParams<DeleteCourseParams>) => api.delete(`courses/${params.id}`, config);
