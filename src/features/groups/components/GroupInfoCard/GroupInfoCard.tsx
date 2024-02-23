import { Button } from '@/components/ui';
import { deleteGroup } from '@/utils/api/requests/groups/delete';
import { Link } from 'react-router-dom';

interface GroupInfoCardProps {
    group: GroupLiteDto;
    isAdmin: boolean
}

export const GroupInfoCard = ({group, isAdmin}:GroupInfoCardProps ) => (
  <div className='flex items-center border-2 p-2 rounded-md'>
    <div className='flex-auto'>
      <Link to={`groups/${group.id}`}>
        <span>{group.name}</span>
      </Link>
    </div>
    {isAdmin && (
      <div className='space-x-2'>
        <Button variant={'secondary'}>
            Редактировать
        </Button>
        <Button onClick={() => deleteGroup({params: { id: group.id }})}>
            Удалить
        </Button>
      </div>)
    }

  </div>
)