/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/utils/api/instance';

interface RequestParams {
  params: any;
  config?: any;
}

export const deleteCourse = async ({ params }: RequestParams) =>
  api.delete(`courses/${params.id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
