import { Button } from '@/components/ui';
import { deleteGroup } from '@/utils/api/requests/groups/delete';
import { Link } from 'react-router-dom';
import { GroupCreateEditDialog } from '../../dialogs/GroupCreateEditDialog';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface GroupInfoCardProps {
  group: GroupLiteDto;
  isAdmin: boolean;
}

export const GroupInfoCard = ({ group, isAdmin }: GroupInfoCardProps) => {
  const queryClient = useQueryClient();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteGroup = async () => {
    setIsDeleting(true);
    try {
      await deleteGroup({ params: { id: group.id } });
      queryClient.invalidateQueries({ queryKey: ['groupCourses'] });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className='flex items-center border-2 p-2 rounded-md'>
      <div className='flex-auto'>
        <Link to={`/groups/${group.id}`}>
          <span>{group.name}</span>
        </Link>
      </div>
      {isAdmin && (
        <div className='space-x-2 flex'>
          <GroupCreateEditDialog
            trigger={<Button variant='secondary'>Редактировать</Button>}
            group={group}
            actionType='edit'
          />
          <Button onClick={handleDeleteGroup} loading={isDeleting}>
            Удалить
          </Button>
        </div>
      )}
    </div>
  );
};
