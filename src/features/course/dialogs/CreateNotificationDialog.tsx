import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { CreateNotificationForm } from '../forms/CreateNotificationForm';

interface CreateNotificationDialogProps {
  trigger: JSX.Element;
}

export const CreateNotificationDialog = ({ trigger }: CreateNotificationDialogProps) => {
  //   const { functions } = useEmployeeDialog();
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[500px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogHeader>
          <DialogTitle className='space-y-2'>Создание уведомления</DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <CreateNotificationForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
