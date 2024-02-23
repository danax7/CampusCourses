import axios from 'axios';
export type PostUserRegisterParams = UserRegisterDto;

export const postUserRegister = async ({
  params,
  config
}: RequestParams<PostUserRegisterParams>) => axios.post<TokenResponse>('https://camp-courses.api.kreosoft.space/registration', params, config);
