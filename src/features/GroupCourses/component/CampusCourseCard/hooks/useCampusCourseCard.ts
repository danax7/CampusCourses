import { useDeleteCampusCourseMutation } from '@/utils/api/hooks/useDeleteCampusCourseMutation';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

interface UseCampusCourseCardProps {
  courseId: string;
}

export const useCampusCourseCard = ({ courseId }: UseCampusCourseCardProps) => {
  const queryClient = useQueryClient();
  const deleteCourse = useDeleteCampusCourseMutation();

  const handleDeleteCourse = async () => {
    const res = await deleteCourse.mutateAsync({ id: courseId });
    if (res.data) {
      queryClient.invalidateQueries({ queryKey: ['groupCourses'] });
      toast.info('Курс успешно удален', {
        cancel: { label: 'Close' },
      });
    }
  };

  return { handleDeleteCourse, isDeleting: deleteCourse.isPending };
};
