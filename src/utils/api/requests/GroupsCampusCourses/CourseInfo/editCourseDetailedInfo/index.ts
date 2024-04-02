import { api } from '@/utils/api/instance';

export interface PutEditCourseDetailedInfoParams {
  courceId: string;
  data: EditCourseDetailedInfoDto;
}

export const PutEditCourseDetailedInfo = async ({
  params,
  config,
}: RequestParams<PutEditCourseDetailedInfoParams>) =>
  api.put(`courses/${params.courceId}`, params.data, config);
