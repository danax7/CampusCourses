import { api } from '../../../instance';

export const getRoles = async () => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  };
  return api.get<UserRolesResponse>('/roles', { headers });
};