import { useDeleteGroupMutation } from '@/utils/api/hooks/useDeleteGroupMutation';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

interface useGroupInfoCardParams {
  groupId: string;
}

export const useGroupInfoCard = ({ groupId }: useGroupInfoCardParams) => {
  const queryClient = useQueryClient();

  const deleteGroup = useDeleteGroupMutation();

  const handleDeleteGroup = async () => {
    const res = await deleteGroup.mutateAsync({ id: groupId });

    if (res.status < 400) {
      queryClient.invalidateQueries({ queryKey: ['getGroups'] });
      toast.info('Группа успешно удалена', {
        cancel: { label: 'Close' },
      });
    }
  };

  return { handleDeleteGroup, isLoading: deleteGroup.isPending };
};
