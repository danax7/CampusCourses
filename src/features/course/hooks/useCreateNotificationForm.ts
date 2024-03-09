import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {
  NotificationCreateSchema,
  notificationCreateSchema,
} from '../constants/notificationCreateSchema';
import { usePostCreateNotificationMutation } from '@/utils/api/hooks/usePostCreateNotificationMutation';

export const useCreateNotificationForm = () => {
  const queryClient = useQueryClient();
  const { courseId } = useParams<{ courseId: string }>();

  const courseStatusEditForm = useForm<NotificationCreateSchema>({
    resolver: zodResolver(notificationCreateSchema),
    defaultValues: {
      text: '',
      isImportant: 'false',
    },
  });

  const postCreateNotification = usePostCreateNotificationMutation();

  const onSubmit = courseStatusEditForm.handleSubmit(async (values) => {
    const isImportant = values.isImportant === 'true';
    const res = await postCreateNotification.mutateAsync({
      id: courseId!,
      notification: { ...values, isImportant },
    });
    if (res.data) {
      queryClient.invalidateQueries({ queryKey: ['groupCourseDetailedInfo'] });
      toast.info('Уведомление успешно создано', {
        cancel: { label: 'Close' },
      });
    }
  });

  return {
    state: {
      isLoading: postCreateNotification.isPending,
    },
    form: courseStatusEditForm,
    functions: { onSubmit },
  };
};
