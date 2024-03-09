import { api } from '@/utils/api/instance';

export const getProfile = async () => {
  return api.get<UserProfileDto>('/profile');
};
