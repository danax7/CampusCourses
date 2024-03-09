import { api } from '../../../instance';

export type PostCreateGroupParams = GroupCreateDto;

export const postCreateGroup = async ({ params }: RequestParams<PostCreateGroupParams>) =>
  api.post('/groups', params);
