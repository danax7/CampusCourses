import { api } from '@/utils/api/instance';

export const getProfile = async () => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  return api.get<UserProfileDto>('/profile', { headers });
};
