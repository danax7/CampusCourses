import { api } from '../../../instance';


export const getGroups = async () => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  };
  return api.get<GroupLiteDto[]>('/groups', { headers });
};