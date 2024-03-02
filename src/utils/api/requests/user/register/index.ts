import { api } from '@/utils/api/instance';

export type PostUserRegisterParams = UserRegisterDto;

export const postUserRegister = async ({
  params,
  config
}: RequestParams<PostUserRegisterParams>) => api.post<TokenResponse>('/registration', params, config);
