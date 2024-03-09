import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { CourseEditSchema, courseEditSchema } from '../constants/courseEditSchema';
import { usePutEditCourseMutation } from '@/utils/api/hooks/usePutEditCourseMutation';

interface useCourseEditFormProps {
  requirements: string;
  annotations: string;
}

export const useCourseEditForm = ({
  requirements,
  annotations,
}: useCourseEditFormProps) => {
  const queryClient = useQueryClient();
  const { courseId } = useParams<{ courseId: string }>();

  const courseEditForm = useForm<CourseEditSchema>({
    resolver: zodResolver(courseEditSchema),
    defaultValues: {
      annotations: annotations || '',
      requirements: requirements || '',
    },
  });

  const putEditStatus = usePutEditCourseMutation();

  const onSubmit = courseEditForm.handleSubmit(async (values) => {
    const res = await putEditStatus.mutateAsync({ id: courseId!, info: values });

    if (res.data) {
      queryClient.invalidateQueries({ queryKey: ['groupCourseDetailedInfo'] });
      toast.info('Инфомация о группе успешно отредактирована', {
        cancel: { label: 'Close' },
      });
    }
  });

  return {
    state: {
      isLoading: putEditStatus.isPending,
    },
    form: courseEditForm,
    functions: { onSubmit },
  };
};
