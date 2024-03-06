import { api } from '@/utils/api/instance';

interface RequestParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: any;
}

export const deleteGroup = async ({ params }: RequestParams) =>
  api.delete(`groups/${params.id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
