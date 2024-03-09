import { useMutation } from '@tanstack/react-query';
import { DeleteGroupParams, deleteGroup } from '../requests/groups/delete';

export const useDeleteGroupMutation = (
  settings?: MutationSettings<DeleteGroupParams, typeof deleteGroup>,
) =>
  useMutation({
    mutationKey: ['deleteGroup'],
    mutationFn: (params) =>
      deleteGroup({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
