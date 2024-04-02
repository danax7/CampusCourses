import { api } from '@/utils/api/instance';

export interface PutEditCourseDescriptionParams {
  id: string;
  info: EditCourseDto;
}

export const PutEditCourseDescription = async ({
  params,
  config,
}: RequestParams<PutEditCourseDescriptionParams>) =>
  api.put(`courses/${params.id}/requirements-and-annotations`, params.info, config);
