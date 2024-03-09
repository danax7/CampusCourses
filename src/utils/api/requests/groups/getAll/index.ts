import { api } from '../../../instance';

export const getGroups = async () => {
  return api.get<GroupLiteDto[]>('/groups');
};
