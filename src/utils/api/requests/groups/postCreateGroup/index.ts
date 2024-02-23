import { api } from '../../../instance';

export type PutProfileEditParams = UserEditDto;

export const postCreateGroup = async ({ params}: RequestParams<PutProfileEditParams>) => api.post('/groups', params,
  {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  }
);
