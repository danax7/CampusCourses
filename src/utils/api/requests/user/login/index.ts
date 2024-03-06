import { api } from '../../../instance';

export type PostUserLoginParams = UserLoginDto;

export const postUserLogin = async ({
  params,
  config,
}: RequestParams<PostUserLoginParams>) =>
  api.post<TokenResponse>('/login', params, config);
