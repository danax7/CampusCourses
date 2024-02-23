import { useGetGroupsQuery } from "@/utils/api/hooks/useGetGroupsQuery";

export const Groups = () => {
    const { data: groups, isLoading } = useGetGroupsQuery();

    return (
    <div className="p-16">
        <div className="flex flex-col space-y-4">
                {!isLoading && (
                    (groups?.data?.map((group, index) => (
                    <div key={index}>
                        <span>{group.name}</span>
                    </div>
                ))
            )
        )}
        </div>
    </div>
    )
}