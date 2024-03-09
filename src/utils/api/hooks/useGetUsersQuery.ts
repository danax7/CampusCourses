import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../requests/user/getAll';

export const useGetUsersQuery = (settings?: QuerySettings<typeof getUsers>) =>
  useQuery({
    queryKey: ['getUsers'],
    queryFn: getUsers,
    ...settings?.options,
  });
