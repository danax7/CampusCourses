import { useMutation } from '@tanstack/react-query';
import { PostUserLoginParams, postUserLogin } from '../requests/user/login';

export const usePostLoginMutation = (
  settings?: MutationSettings<PostUserLoginParams, typeof postUserLogin>,
) =>
  useMutation({
    mutationKey: ['postLogin'],
    mutationFn: (params) =>
      postUserLogin({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options,
  });
