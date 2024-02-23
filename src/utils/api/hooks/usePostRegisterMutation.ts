import { useMutation } from '@tanstack/react-query';
import { PostUserRegisterParams, postUserRegister } from '../requests/user/register';


export const usePostRegisterMutation = (
  settings?: MutationSettings<PostUserRegisterParams, typeof postUserRegister>
) =>
  useMutation({
    mutationKey: ['postRegister'],
    mutationFn: (params) =>
      postUserRegister({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
