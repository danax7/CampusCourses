import { PutUserEditParams } from './../requests/user/profile/edit/index';
import { useMutation } from '@tanstack/react-query';
import { putProfileEdit } from '../requests/user/profile/edit';

export const usePutProfileEditMutation = (
  settings?: MutationSettings<PutUserEditParams, typeof putProfileEdit>,
) =>
  useMutation({
    mutationKey: ['putProfileEdit'],
    mutationFn: (params) =>
      putProfileEdit({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options,
  });
