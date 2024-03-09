import { api } from '@/utils/api/instance';

export interface DeleteGroupParams {
  id: string;
}

export const deleteGroup = async ({ params, config }: RequestParams<DeleteGroupParams>) =>
  api.delete(`groups/${params.id}`, config);
