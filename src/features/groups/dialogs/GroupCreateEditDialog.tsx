'use client';

import { XIcon } from 'lucide-react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { GroupForm } from '../forms/GroupForm';

interface GroupCreateEditDialogProps {
  trigger: JSX.Element;
  actionType: 'add' | 'edit';
  groupId?: string;
}

export const GroupCreateEditDialog = ({ trigger, actionType, groupId }: GroupCreateEditDialogProps) => {
//   const { functions } = useEmployeeDialog();
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[500px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogHeader>
          {actionType === 'add' && (
            <DialogTitle className='space-y-2'>
              Добавление группы
            </DialogTitle>
          )}
          {actionType === 'edit' && (
            <DialogTitle className='space-y-2'>
              Редактирование названия группы
            </DialogTitle>
          )}
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <GroupForm actionType={actionType} groupId={groupId} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
