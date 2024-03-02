import { useMutation } from '@tanstack/react-query';
import { PostEditStudentMarkParams, postEditStudentMark } from '../requests/GroupsCampusCourses/CourseInfo/editStudentMark';

export const usePostEditStudentMarkMutation = (
  settings?: MutationSettings<PostEditStudentMarkParams, typeof postEditStudentMark>
) =>
  useMutation({
    mutationKey: ['postEditStudentMark'],
    mutationFn: (params) => postEditStudentMark(params),
    ...settings?.options
  });
