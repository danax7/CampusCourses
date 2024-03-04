import { usePostEditStudentStatusMutation } from '@/utils/api/hooks/usePostEditStudentStatusMutation';
import { usePostSignUpForCourseMutation } from '@/utils/api/hooks/usePostSignUpForCourseMutation';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useCourseDetailedInfo = (courseId: string) => {
  const postSignUpForCourse = usePostSignUpForCourseMutation();
  const postEditStudentStatus= usePostEditStudentStatusMutation();

  const queryClient = useQueryClient();

  const handleSignUpForCourse = async () => {
    const res = await postSignUpForCourse.mutateAsync({ id: courseId });

    if (res.data) {
      queryClient.invalidateQueries({queryKey: ['groupCourseDetailedInfo']});
      toast.info('Вы успешно вошли на курс', {
        cancel: { label: 'Close' }
      });
    }
  };

  const handleChangeUserStatus = async (studentId: string, editStatus: StudentStatuses) => {
    const res = await postEditStudentStatus.mutateAsync({ courseId: courseId, studentId: studentId, data: {status: editStatus} });
 
    if (res.data) {
      queryClient.invalidateQueries({queryKey: ['groupCourseDetailedInfo']});
      toast.info('Статус пользователя успешно изменен', {
        cancel: { label: 'Close' }
      });
    }
  };

  return {
    handleSignUpForCourse,
    isLoading: postSignUpForCourse.isPending,
    isEditStatusLoading: postEditStudentStatus.isPending,
    handleChangeUserStatus
  };
};