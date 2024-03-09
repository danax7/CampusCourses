import { useMutation } from '@tanstack/react-query';
import {
  PostCreateNotificationParams,
  postCreateNotification,
} from '../requests/GroupsCampusCourses/CourseInfo/notificationCreate';

// export const usePostCreateNotificationMutation = (
//   settings?: MutationSettings<typeof postCreateNotification>,
// ) =>
//   useMutation({
//     mutationKey: ['postCreateNotification'],
//     mutationFn: (params) =>
//       postCreateNotification({
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         //@ts-ignore
//         id: params.id,
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         //@ts-ignore
//         data: params.data,
//         ...(settings?.config && { config: settings.config }),
//       }),
//     ...settings?.options,
//   });

export const usePostCreateNotificationMutation = (
  settings?: MutationSettings<
    PostCreateNotificationParams,
    typeof postCreateNotification
  >,
) =>
  useMutation({
    mutationKey: ['postCreateNotification'],
    mutationFn: (params) =>
      postCreateNotification({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
