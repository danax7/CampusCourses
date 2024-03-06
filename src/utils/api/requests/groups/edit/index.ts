/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/utils/api/instance';

export const putEditGroup = async ({ id, data }: { id: string; data: any }) => {
  return api.put(`groups/${id}`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
