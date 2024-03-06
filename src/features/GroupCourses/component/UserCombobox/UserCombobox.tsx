// import { useGetUsersQuery } from '@/utils/api/hooks/useGetUsersQuery';
// // import React from 'react';
// // import { useDebounceCallback } from 'usehooks-ts';
// import { Combobox, type ComboboxProps } from '@/components/ui';
// import { convertUsersToComboboxItems } from '../../helpers/ConvertUsersToComboboxItems';

// interface UsersComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {}

// // const LOCATION_SEARCH_DELAY = 200;

// export const UsersCombobox = (props: UsersComboboxProps) => {
//   // const [userSearch, setUserSearch] = React.useState('');
//   // const debouncedSetUsersSearch = useDebounceCallback(setUserSearch, LOCATION_SEARCH_DELAY);

//   // const getUsers = useGetUserQuery({
//   //   config: { params: { id: userSearch } },
//   //   options: { enabled: userSearch.length > 2 }
//   // });

//   const getUsers = useGetUsersQuery();
//   // const users =
//   //   [
//   //     {
//   //         id: "ddc025f9-f9b3-41be-12cd-08db2e8acafa",
//   //         fullName: "гачипуповец"
//   //     },
//   //     {
//   //         id: "776668a5-c65d-41da-12ce-08db2e8acafa",
//   //         fullName: "Первый Препод Курсович"
//   //     },
//   //     {
//   //         id: "0ad2c60a-74ec-45db-12cf-08db2e8acafa",
//   //         fullName: "Второй Препод Курсович"
//   //     },
//   //   ]

//   console.log(getUsers.data);
//   const users = Array.isArray(getUsers.data) ? getUsers.data : [];

//   // Проверка, что данные пришли и являются массивом

//   return (
//     <div>
//       {getUsers.data && (
//       <Combobox
//       {...props}
//       items={convertUsersToComboboxItems(users)}
//       // onSearchChange={debouncedSetUsersSearch}
//       loading={getUsers.isLoading}
//     />
//       )}

//     </div>

//   );
// };
