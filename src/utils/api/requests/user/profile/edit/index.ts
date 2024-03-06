import { api } from '@/utils/api/instance';

export type PutUserEditParams = UserEditDto;

export const putProfileEdit = async ({ params }: RequestParams<PutUserEditParams>) =>
  api.put('/profile', params, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
