import { useMutation } from '@tanstack/react-query';
import { putEditGroup } from '../requests/groups/edit';


export const usePutGroupEditMutation = (
    settings?: MutationSettings<typeof putEditGroup>
  ) =>
    useMutation({
      mutationKey: ['putGroupEdit'],
      mutationFn: (params) =>
        putEditGroup({
          id: params.id,
          data: params.data,
          ...(settings?.config && { config: settings.config })
        }),
      ...settings?.options
    });
  