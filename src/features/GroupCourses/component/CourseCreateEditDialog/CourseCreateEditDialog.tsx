import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { CourceCreateForm } from '../../forms/CourceCreateForm';

interface CourseCreateEditDialogProps {
  trigger: JSX.Element;
  actionType: 'add' | 'edit';
  cource?: CampusCourseDto;
}

export const CourseCreateEditDialog = ({
  trigger,
  actionType,
  cource,
}: CourseCreateEditDialogProps) => {
  //   const { functions } = useEmployeeDialog();
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[500px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogHeader>
          {actionType === 'add' && (
            <DialogTitle className='space-y-2'>Создание курса</DialogTitle>
          )}
          {actionType === 'edit' && (
            <DialogTitle className='space-y-2'>Редактирование курса</DialogTitle>
          )}
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          {/* <GroupForm actionType={actionType} group={group} /> */}
          <CourceCreateForm actionType={actionType} cource={cource} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
