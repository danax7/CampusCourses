import { Button } from '@/components/ui';
import { CampusCourseCard } from '@/features/GroupCourses/component/CampusCourseCard/CampusCourseCard';
import { CourseCreateEditDialog } from '@/features/GroupCourses/component/CourseCreateEditDialog/CourseCreateEditDialog';
import { selectUserRoles } from '@/utils/AuthSlice/slice';
import { useGetGroupCoursesByIdQuery } from '@/utils/api/hooks/useGetGroupCoursesQuery';
import { useGetGroupsQuery } from '@/utils/api/hooks/useGetGroupsQuery';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const GroupPage = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const userRole = useSelector(selectUserRoles);
  const { isLoading, isError, data, error, isSuccess } = useGetGroupCoursesByIdQuery(
    groupId!,
  );
  const { data: groups } = useGetGroupsQuery();
  const groupName = groups?.data.find(({ id }) => id === groupId)?.name; //cringe

  return (
    <div className='py-6 md:px-20 px-2 space-y-4'>
      <h2 className='font-semibold text-3xl'>{groupName}</h2>
      <div>
        {userRole.isAdmin && (
          <CourseCreateEditDialog
            trigger={
              <Button>
                <PlusCircledIcon className='mr-2 h-4 w-4' />
                Создать курс
              </Button>
            }
            actionType='add'
          />
        )}
      </div>
      <div className='space-y-3'>
        {isSuccess && data && data.map((course) => <CampusCourseCard course={course} />)}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {isSuccess && data.length == 0 && <div>У группы нет курсов на данный момент</div>}
      </div>
    </div>
  );
};
