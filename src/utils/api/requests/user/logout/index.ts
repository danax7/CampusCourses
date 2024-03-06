import { api } from '../../../instance';

export type PostUserLoginParams = UserLoginDto;

export const postUserLogout = async () =>
  api.post(
    '/logout',
    {},
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  );
