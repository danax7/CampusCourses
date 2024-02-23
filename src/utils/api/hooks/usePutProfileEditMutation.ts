import { useMutation } from '@tanstack/react-query';
import { putProfileEdit } from '../requests/user/profile/edit';
import { PutProfileEditParams } from '../requests/groups/postCreateGroup';


export const usePutProfileEditMutation = (
  settings?: MutationSettings<PutProfileEditParams, typeof putProfileEdit>
) =>
  useMutation({
    mutationKey: ['putProfileEdit'],
    mutationFn: (params) =>
    putProfileEdit({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
