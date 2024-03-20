import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { usePutEditCourseDescriptionMutation } from '@/utils/api/hooks/usePutEditCourseDescriptionMutation';
import {
  CourseEditDescriptionSchema,
  courseEditDescriptionSchema,
} from '../constants/courseEditDescriptionSchema';

interface useCourseEditDescriprionFormProps {
  requirements: string;
  annotations: string;
}

export const useCourseEditDescriprionForm = ({
  requirements,
  annotations,
}: useCourseEditDescriprionFormProps) => {
  const queryClient = useQueryClient();
  const { courseId } = useParams<{ courseId: string }>();

  const courseEditDescriptionForm = useForm<CourseEditDescriptionSchema>({
    resolver: zodResolver(courseEditDescriptionSchema),
    defaultValues: {
      annotations: annotations || '',
      requirements: requirements || '',
    },
  });

  const putEditCourseDescription = usePutEditCourseDescriptionMutation();

  const onSubmit = courseEditDescriptionForm.handleSubmit(async (values) => {
    const res = await putEditCourseDescription.mutateAsync({
      id: courseId!,
      info: values,
    });

    if (res.data) {
      queryClient.invalidateQueries({ queryKey: ['groupCourseDetailedInfo'] });
      toast.info('Инфомация о группе успешно отредактирована', {
        cancel: { label: 'Close' },
      });
    }
  });

  return {
    state: {
      isLoading: putEditCourseDescription.isPending,
    },
    form: courseEditDescriptionForm,
    functions: { onSubmit },
  };
};
