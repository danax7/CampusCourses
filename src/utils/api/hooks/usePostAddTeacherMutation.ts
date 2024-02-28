import { useMutation } from '@tanstack/react-query';import { PostAddTeacherMutationParams, postAddTeacher } from '../requests/GroupsCampusCourses/CourseInfo/addTeacher';

export const usePostAddTeacherMutation = (
  settings?: MutationSettings<PostAddTeacherMutationParams, typeof postAddTeacher>
) =>
  useMutation({
    mutationKey: ['postAddTeacher'],
    mutationFn: (params) => postAddTeacher(params),
    ...settings?.options
  });
