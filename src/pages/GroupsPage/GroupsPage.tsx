import { Button } from "@/components/ui";
import { Groups } from "@/features/groups/Groups";
import { selectUserRoles } from "@/utils/AuthSlice/slice";
import { useSelector } from "react-redux";
export const GroupsPage = () => {
    const userRole = useSelector(selectUserRoles);

    return (
        <div className="py-6 md:px-40 px-10">
            <div className="space-y-2">
                <h2 className="font-semibold text-3xl">Группы кампусных курсов</h2>
                {userRole.isAdmin && (
                    <Button>Создать группу</Button>
                )}
            </div>
            <Groups/>
        </div>
    )
}