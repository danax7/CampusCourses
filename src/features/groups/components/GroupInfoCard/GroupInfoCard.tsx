import { Button } from '@/components/ui';
import { deleteGroup } from '@/utils/api/requests/groups/delete';
import { Link } from 'react-router-dom';
import { GroupCreateEditDialog } from '../../dialogs/GroupCreateEditDialog';
import { useQueryClient } from '@tanstack/react-query';

interface GroupInfoCardProps {
    group: GroupLiteDto;
    isAdmin: boolean
}

export const GroupInfoCard = ({group, isAdmin}: GroupInfoCardProps ) => {
  const queryClient = useQueryClient();

  const handleDeleteGroup = async () => {
    await deleteGroup({params: { id: group.id }});
    queryClient.invalidateQueries('getGroups'); 
  };

  return (
    <div className='flex items-center border-2 p-2 rounded-md'>
      <div className='flex-auto'>
        <Link to={`groups/${group.id}`}>
          <span>{group.name}</span>
        </Link>
      </div>
      {isAdmin && (
        <div className='space-x-2 flex'>
          <GroupCreateEditDialog 
            trigger={
              <Button variant='secondary'>
                Редактировать
              </Button>
            }
            groupId={group.id}
            actionType='edit'
          />
          <Button onClick={handleDeleteGroup}>
            Удалить
          </Button>
        </div>
      )}
    </div>
  );
}
