import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { AddTeacherForm } from '../forms/AddTeacherForm';

interface AddTeacherDialogProps {
  trigger: JSX.Element;
}

export const AddTeacherDialog = ({ trigger }: AddTeacherDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[500px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogHeader>
          <DialogTitle className='space-y-2'>Добавление преподавателя</DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <AddTeacherForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
