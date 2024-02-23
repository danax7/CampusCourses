import axios from 'axios';
export type PostUserLoginParams = UserLoginDto;

export const postUserLogout = async () => axios.post('https://camp-courses.api.kreosoft.space/logout', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }
);
