import { useMutation } from '@tanstack/react-query';
import { postEditCourseStatus } from '../requests/GroupsCampusCourses/CourseInfo/StatusEdit';

export const usePostEditCourseStatusMutation = (
    settings?: MutationSettings<typeof postEditCourseStatus>
  ) =>
  useMutation({
    mutationKey: ['putEditCourseStatus'],
    mutationFn: ({ id, data }) =>
        postEditCourseStatus({
            id,
            data,
            ...(settings?.config && { config: settings.config })
        }),
    ...settings?.options
});