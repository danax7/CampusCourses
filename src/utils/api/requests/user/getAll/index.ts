import { api } from '@/utils/api/instance';

export const getUsers = async ({ config }: RequestParams) =>
  api.get<SearchUserDto[]>('/users', {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
