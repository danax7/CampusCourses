import { useMutation } from '@tanstack/react-query';
import { putEditGroup } from '../requests/groups/edit';

export const usePutGroupEditMutation = (
  settings?: MutationSettings<typeof putEditGroup>,
) =>
  useMutation({
    mutationKey: ['putGroupEdit'],
    mutationFn: (params) =>
      putEditGroup({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        id: params.id,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        data: params.data,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
