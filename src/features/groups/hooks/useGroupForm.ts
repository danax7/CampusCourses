import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { GroupSchema, groupSchema } from '../constants/GroupSchema';
import { usePostCreateGroupMutation } from '@/utils/api/hooks/usePostGroupMutation';
import { toast } from 'sonner';

export const useGroupForm = () => {

  const groupForm = useForm<GroupSchema>({
    resolver: zodResolver(groupSchema),
    defaultValues: {
        name: ''
    }
  });

  const postCreateGroup = usePostCreateGroupMutation();

  const onSubmit = groupForm.handleSubmit(async (values) => {
    await postCreateGroup.mutateAsync(values);
    if (postCreateGroup.isSuccess){
      toast.error('Группа успешно создана', {
        cancel: { label: 'Close' }
      });
    }
   
  });

  return {
    state: {
        isLoading: postCreateGroup.isPending
    },
    form: groupForm,
    functions: { onSubmit }
  };
};
