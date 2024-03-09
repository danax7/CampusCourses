import { api } from '../../../instance';

export const postUserLogout = async () => api.post('/logout');
