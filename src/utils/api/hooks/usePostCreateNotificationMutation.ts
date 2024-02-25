import { useMutation } from '@tanstack/react-query';
import { postCreateNotification } from '../requests/GroupsCampusCourses/CourseInfo/notificationCreate';



export const usePostCreateNotificationMutation = (
    settings?: MutationSettings<typeof postCreateNotification>
  ) =>
    useMutation({
      mutationKey: ['postCreateNotification'],
      mutationFn: (params) =>
      postCreateNotification({
          id: params.id,
          data: params.data,
          ...(settings?.config && { config: settings.config })
        }),
      ...settings?.options
    });
  