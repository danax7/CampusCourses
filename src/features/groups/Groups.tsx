import { useGetGroupsQuery } from '@/utils/api/hooks/useGetGroupsQuery';
import { GroupInfoCard } from './components/GroupInfoCard/GroupInfoCard';
import { useSelector } from 'react-redux';
import { selectUserRoles } from '@/utils/AuthSlice/slice';

export const Groups = () => {
  const { data: groups, isLoading } = useGetGroupsQuery();
  const role = useSelector(selectUserRoles);
  return (
    <div className='md:p-16 p-2'>
      <div className='flex flex-col space-y-4'>
        {!isLoading &&
          groups?.data?.map((group, index) => (
            <GroupInfoCard group={group} key={index} isAdmin={role.isAdmin} />
          ))}
      </div>
    </div>
  );
};
