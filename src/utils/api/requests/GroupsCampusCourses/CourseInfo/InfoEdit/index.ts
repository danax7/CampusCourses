import { api } from '@/utils/api/instance';

export interface PutEditCourseParams {
  id: string;
  info: EditCourseDto;
}

export const putEditCourse = async ({
  params,
  config,
}: RequestParams<PutEditCourseParams>) =>
  api.put(`courses/${params.id}`, params.info, config);
