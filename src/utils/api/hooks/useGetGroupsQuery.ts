import { getGroups } from '@/utils/api/requests/groups/getAll';
import { useQuery } from '@tanstack/react-query';

export const useGetGroupsQuery = (settings?: QuerySettings<typeof getGroups>) =>
  { 
    return (
      useQuery({
        queryKey: ['getGroups'],
        queryFn: getGroups,
        ...settings?.options
      })
    )
  }