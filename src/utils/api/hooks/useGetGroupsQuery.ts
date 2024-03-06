import { useQuery } from '@tanstack/react-query';
import { getGroups } from '../requests/groups/getAll';

export const useGetGroupsQuery = (settings?: QuerySettings<typeof getGroups>) => {
  return useQuery({
    queryKey: ['getGroups'],
    queryFn: getGroups,
    ...settings?.options,
  });
};
