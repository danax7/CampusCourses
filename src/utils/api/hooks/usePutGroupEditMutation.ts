import { useMutation } from '@tanstack/react-query';
import { PutEditGroupParams, putEditGroup } from '../requests/groups/edit';

export const usePutGroupEditMutation = (
  settings?: MutationSettings<PutEditGroupParams, typeof putEditGroup>,
) =>
  useMutation({
    mutationKey: ['putGroupEdit'],
    mutationFn: (params) =>
      putEditGroup({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
