import { useParams } from "react-router-dom";

export const GroupPage = () => {
    const { groupId } = useParams<{ groupId: string }>();
    return(
        <div>
            <span>{groupId}</span>
        </div>
    )
}