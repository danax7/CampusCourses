import { api } from '@/utils/api/instance';

export type PostCampusCourseCreateParams = {
  groupId: string;
  data: CampusCourseCreateDto;
};

export const postCreateGroupCourse = async ({
  params,
  config,
}: RequestParams<PostCampusCourseCreateParams>) =>
  api.post(`groups/${params.groupId}`, params.data, config);
