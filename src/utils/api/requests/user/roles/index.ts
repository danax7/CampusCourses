import { api } from '../../../instance';

export const getRoles = async () => {
  return api.get<UserRolesResponse>('/roles');
};
