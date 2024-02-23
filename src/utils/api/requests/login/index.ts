import axios from 'axios';
export type PostUserLoginParams = UserLoginDto;

export const postUserLogin = async ({
  params,
  config
}: RequestParams<PostUserLoginParams>) => axios.post<TokenResponse>('https://camp-courses.api.kreosoft.space/login', params, config);
