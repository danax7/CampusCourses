import { api } from '@/utils/api/instance';

export type PostEditCourseStatusParams = {
  courceId: string;
  data: EditCourseStatusDto;
};

export const postEditCourseStatus = async ({
  params,
  config,
}: RequestParams<PostEditCourseStatusParams>) =>
  api.post(`courses/${params.courceId}/status`, params.data, config);
