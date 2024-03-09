import { Button } from '@/components/ui';
import { Link } from 'react-router-dom';
import { GroupCreateEditDialog } from '../../dialogs/GroupCreateEditDialog';
import { useGroupInfoCard } from './hooks/useGroupInfoCard';

interface GroupInfoCardProps {
  group: GroupLiteDto;
  isAdmin: boolean;
}

export const GroupInfoCard = ({ group, isAdmin }: GroupInfoCardProps) => {
  const { handleDeleteGroup, isLoading } = useGroupInfoCard({ groupId: group.id });

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
          <Button onClick={handleDeleteGroup} loading={isLoading}>
            Удалить
          </Button>
        </div>
      )}
    </div>
  );
};
