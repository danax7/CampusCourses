import { api } from '@/utils/api/instance';

export interface PostCreateNotificationParams {
  id: string;
  notification: CreateNotificationDto;
}

export const postCreateNotification = async ({
  params,
  config,
}: RequestParams<PostCreateNotificationParams>) =>
  api.post(`courses/${params.id}/notifications`, params.notification, config);
