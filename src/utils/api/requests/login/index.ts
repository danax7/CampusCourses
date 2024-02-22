import axios from 'axios';
// import axios from 'axios';
// export const login = async () => {
//     const response = await axios.post<UserLoginDto>('https://camp-courses.api.kreosoft.space/login');
//     return response;
// }



export type PostUserLoginParams = UserLoginDto;

export const postUserLogin = async ({
  params,
  config
}: RequestParams<PostUserLoginParams>) => axios.post('https://camp-courses.api.kreosoft.space/login', params, config);
