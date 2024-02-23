import { Button } from "@/components/ui";
import { Groups } from "@/features/groups/Groups";
import { selectUserRoles } from "@/utils/AuthSlice/slice";
import { useSelector } from "react-redux";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { GroupCreateEditDialog } from "@/features/groups/dialogs/GroupCreateEditDialog";

  

export const GroupsPage = () => {
    const userRole = useSelector(selectUserRoles);

    return (
        <div className="py-6 md:px-40 px-10">
             <div className="space-y-2">
                <h2 className="font-semibold text-3xl">Группы кампусных курсов</h2>
                {userRole.isAdmin && (
                    <GroupCreateEditDialog 
                    trigger={
                        <Button >
                          <PlusCircledIcon className='mr-2 h-4 w-4' />
                          Создать группу
                        </Button>
                      }
                      actionType='add'
                    />
                )}
             </div>
            <Groups/>
        </div>
    )
}