import { api } from '@/utils/api/instance';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postCreateNotification = async ({ id, data }: { id: string; data: any }) =>
  api.post(`courses/${id}/notifications`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
