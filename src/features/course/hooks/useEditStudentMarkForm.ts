import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { usePostEditStudentMarkMutation } from '@/utils/api/hooks/usePostEditStudentMarkMutation';
import {
  EditStudentMarkSchema,
  editStudentMarkSchema,
} from '../constants/editStudentMarkSchema';

interface useEditStudentMarkFormProps {
  studentId: string;
  markType: string;
}

export const useEditStudentMarkForm = ({
  studentId,
  markType,
}: useEditStudentMarkFormProps) => {
  const queryClient = useQueryClient();
  const { courseId } = useParams<{ courseId: string }>();

  const studentMarkEditForm = useForm<EditStudentMarkSchema>({
    resolver: zodResolver(editStudentMarkSchema),
    defaultValues: {
      mark: 'Passed',
      markType: markType,
    },
  });

  const postEditStudentMark = usePostEditStudentMarkMutation();

  const onSubmit = studentMarkEditForm.handleSubmit(async (values) => {
    const res = await postEditStudentMark.mutateAsync({
      courseId: courseId!,
      studentId: studentId,
      data: values,
    });
    if (res.data) {
      queryClient.invalidateQueries({ queryKey: ['groupCourseDetailedInfo'] });
      toast.info('Результат промежуточной аттестации успешно отредактирован', {
        cancel: { label: 'Close' },
      });
    }
  });

  return {
    state: {
      isLoading: postEditStudentMark.isPending,
    },
    form: studentMarkEditForm,
    functions: { onSubmit },
  };
};
