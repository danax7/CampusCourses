import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { CourseEditForm } from '../forms/CourseEditForm';

interface CourseEditInfoDialogDialogProps {
  trigger: JSX.Element;
  requirments: string;
  annotations: string;
}

export const CourseEditInfoDialog = ({
  trigger,
  requirments,
  annotations,
}: CourseEditInfoDialogDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[500px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogHeader>
          <DialogTitle className='space-y-2'>Редактирование курса</DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <CourseEditForm annotations={annotations} requirements={requirments} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
