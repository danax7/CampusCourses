import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { CourseStatusEditForm } from '../forms/CourseStatusEditForm';

interface CourseStatusEditDialogProps {
  trigger: JSX.Element;
  status: СourseStatus;
}

export const CourseStatusEditDialog = ({
  trigger,
  status,
}: CourseStatusEditDialogProps) => {
  //   const { functions } = useEmployeeDialog();
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[500px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogHeader>
          <DialogTitle className='space-y-2'>Редактирование статуса курса</DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <CourseStatusEditForm status={status} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
