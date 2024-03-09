import { api } from '@/utils/api/instance';

export type PostCampusCourseCreateParams = {
  groupId: string;
  data: CampusCourseCreateDto;
};

export const postCreateGroupCourse = async ({
  params,
  config,
}: RequestParams<PostCampusCourseCreateParams>) =>
  api.post(`courses/${params.groupId}`, params.data, config);
