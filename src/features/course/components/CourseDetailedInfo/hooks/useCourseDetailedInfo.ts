import { usePostSignUpForCourseMutation } from '@/utils/api/hooks/usePostSignUpForCourseMutation';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useCourseDetailedInfo = (courseId: string) => {
  const postSignUpForCourse = usePostSignUpForCourseMutation();
  const queryClient = useQueryClient();

  const handleSignUpForCourse = async () => {
    const res = await postSignUpForCourse.mutateAsync({ id: courseId });

    if (res.data) {
      queryClient.invalidateQueries('groupCourseDetailedInfo');
      toast.info('Вы успешно вошли на курс', {
        cancel: { label: 'Close' }
      });
    }
  };
  return {
    handleSignUpForCourse,
    isLoading: postSignUpForCourse.isPending
  };
};