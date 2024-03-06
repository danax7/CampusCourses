import { api } from '@/utils/api/instance';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const putEditCourse = async ({ id, data }: { id: string; data: any }) =>
  api.put(`courses/${id}`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
