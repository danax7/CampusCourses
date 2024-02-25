import { useGetCourseInfoByIdQuery } from "@/utils/api/hooks/useGetCourseInfoQuery";
import { useParams } from "react-router-dom";

export const CoursePage = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const { isLoading, isError, data, error, isSuccess } = useGetCourseInfoByIdQuery(courseId!);
    console.log(data)
    return(
        <div className="py-6 md:px-20 px-2 space-y-4">
            <h2 className="text-3xl font-semibold">Название курса</h2>
        </div>
    )
}