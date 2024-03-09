import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { GroupSchema, groupSchema } from '../constants/GroupSchema';
import { usePostCreateGroupMutation } from '@/utils/api/hooks/usePostGroupMutation';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { usePutGroupEditMutation } from '@/utils/api/hooks/usePutGroupEditMutation';

interface useGroupFormProps {
  actionType: 'add' | 'edit';
  group?: GroupLiteDto;
}

export const useGroupForm = ({ actionType, group }: useGroupFormProps) => {
  const queryClient = useQueryClient();

  const groupForm = useForm<GroupSchema>({
    resolver: zodResolver(groupSchema),
    defaultValues: {
      name: '',
    },
  });

  const postCreateGroup = usePostCreateGroupMutation();
  const putGroupEdit = usePutGroupEditMutation();

  useEffect(() => {
    if (actionType === 'edit') {
      groupForm.setValue('name', group?.name || '');
    }
  }, [actionType, group]);

  const onSubmit = groupForm.handleSubmit(async (values) => {
    if (actionType === 'add') {
      const res = await postCreateGroup.mutateAsync(values);
      if (res.data) {
        queryClient.invalidateQueries({ queryKey: ['getGroups'] });
        toast.info('Группа успешно создана', {
          cancel: { label: 'Close' },
        });
      }
    } else if (actionType === 'edit') {
      const res = await putGroupEdit.mutateAsync({ id: group!.id, name: values });
      if (res.data) {
        queryClient.invalidateQueries({ queryKey: ['getGroups'] });
        toast.info('Группа успешно отредактирована', {
          cancel: { label: 'Close' },
        });
      }
    }
  });

  return {
    state: {
      isLoading: postCreateGroup.isPending || putGroupEdit.isPending,
    },
    form: groupForm,
    functions: { onSubmit },
  };
};
