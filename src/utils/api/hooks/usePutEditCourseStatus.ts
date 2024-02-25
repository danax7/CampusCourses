import { useMutation } from '@tanstack/react-query';
import { postEditCourseStatus } from '../requests/GroupsCampusCourses/CourseInfo/edit';



export const usePostEditCourseStatusMutation = (
    settings?: MutationSettings<typeof postEditCourseStatus>
  ) =>
    useMutation({
      mutationKey: ['putEditCourseStatus'],
      mutationFn: (params) =>
      postEditCourseStatus({
          id: params.id,
          data: params.data,
          ...(settings?.config && { config: settings.config })
        }),
      ...settings?.options
    });
  