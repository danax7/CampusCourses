// import { api } from '@/utils/api/instance';

import { api } from '@/utils/api/instance';

// export const postCreateCourse = async ({ groupId, data }: { groupId: string; data: CampusCourseCreateDto }) =>
//   api.post(`courses/${groupId}`, data, {
//     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//   });

export type PostCampusCourseCreateParams = {
  groupId: string;
  data: CampusCourseCreateDto;
};

// Вместо RequestParams<PostCampusCourseCreateParams> используйте объект, содержащий оба параметра groupId и data.
export const postCreateGroupCourse = async ({
  groupId,
  data,
  config,
}: {
  groupId: string;
  data: CampusCourseCreateDto;
  config?: any;
}) => {
  return api.post(`courses/${groupId}`, data, {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
