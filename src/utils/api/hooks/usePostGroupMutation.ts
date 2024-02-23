import { useMutation } from '@tanstack/react-query';
import { PostCreateGroupParams, postCreateGroup } from '../requests/groups/postCreateGroup';

export const usePostCreateGroupMutation = (
  settings?: MutationSettings<PostCreateGroupParams, typeof postCreateGroup>
) =>
  useMutation({
    mutationKey: ['postCreateGroup'],
    mutationFn: (params) =>
    postCreateGroup({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
