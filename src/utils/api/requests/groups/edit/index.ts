import { api } from '@/utils/api/instance';

export interface PutEditGroupParams {
  id: string;
  name: EditGroupDto;
}

export const putEditGroup = async ({
  params,
  config,
}: RequestParams<PutEditGroupParams>) =>
  api.put(`groups/${params.id}`, params.name, config);
