import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../requests/user/getAll';

export const useGetUsersQuery = (settings?: QuerySettings<typeof getUsers>) =>
  useQuery({
    queryKey: ['getUsers'],
    queryFn: (params) =>
      getUsers({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options,
  });

// export const useGetUsersQuery = (settings?: QuerySettings<typeof getUsers>) =>
//   useQuery({
//     queryKey: ['getUsers', settings?.config?.params.user],
//     queryFn: (params) =>
//       getUsers({ params, ...(settings?.config && { config: settings.config }) }),
//     ...settings?.options
//   });
