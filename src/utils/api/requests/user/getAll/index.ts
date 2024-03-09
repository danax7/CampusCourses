import { api } from '@/utils/api/instance';

export const getUsers = async () => api.get<SearchUserDto[]>('/users');
