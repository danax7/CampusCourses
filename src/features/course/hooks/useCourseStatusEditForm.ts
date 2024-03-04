import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { CourseStatusEditSchema, courseStatusEditSchema } from '../constants/courseStatusEditSchema';
import { useParams } from 'react-router-dom';
import { usePostEditCourseStatusMutation } from '@/utils/api/hooks/usePutEditCourseStatus';


interface useCourseStatusEditFormProps {
  status: string;
}

export const useCourseStatusEditForm = ({status}: useCourseStatusEditFormProps) => {
  const queryClient = useQueryClient();
  const { courseId } = useParams<{ courseId: string }>();

  const courseStatusEditForm = useForm<CourseStatusEditSchema>({
    resolver: zodResolver(courseStatusEditSchema),
    defaultValues: {
      status: status
    }
  });

    const postEditCourseStatus = usePostEditCourseStatusMutation();

    const onSubmit = courseStatusEditForm.handleSubmit(async (values) => {
      const res = await postEditCourseStatus.mutateAsync({ id: courseId!, data: values });
      if (res) {
        queryClient.invalidateQueries({ queryKey: ['groupCourseDetailedInfo'] });
        toast.info('Статус успешно отредактирован', {
          cancel: { label: 'Close' }
        });
      }
    });
    

  return {
    state: {
      isLoading: postEditCourseStatus.isPending
    },
    form: courseStatusEditForm,
    functions: { onSubmit }
  };
};
