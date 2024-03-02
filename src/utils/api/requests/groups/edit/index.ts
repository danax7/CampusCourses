import { api } from '@/utils/api/instance';


export const putEditGroup = async ({ id, data }: { id: string; data: any }) =>
  api.put(`groups/${id}`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
