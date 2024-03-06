import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { EditStudentMarkForm } from '../forms/EditStudentMarkForm';
// import { AddTeacherForm } from '../forms/AddTeacherForm';

interface EditStudentMarkDialogProps {
  trigger: JSX.Element;
  markType: MarkType;
  studentId: string;
}

export const EditStudentMarkDialog = ({
  trigger,
  markType,
  studentId,
}: EditStudentMarkDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[520px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogHeader>
          <DialogTitle className='space-y-2'>
            Изменение отметки для "{markType === 'Final' ? 'Финальная' : 'Промежуточная'}{' '}
            аттестация"
          </DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <EditStudentMarkForm markType={markType} studentId={studentId} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
