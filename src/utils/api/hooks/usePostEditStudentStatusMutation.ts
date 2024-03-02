import { useMutation } from '@tanstack/react-query';
import { PostEditStudentStatusParams, postEditStudentStatus } from '../requests/GroupsCampusCourses/CourseInfo/editStudentStatus';

export const usePostEditStudentStatusMutation = (
  settings?: MutationSettings<PostEditStudentStatusParams, typeof postEditStudentStatus>
) =>
  useMutation({
    mutationKey: ['postEditStudentStatus'],
    mutationFn: (params) => postEditStudentStatus(params),
    ...settings?.options
  });
