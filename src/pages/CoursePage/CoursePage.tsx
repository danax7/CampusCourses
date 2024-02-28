import { CourceDetailedInfo } from "@/features/course/components/CourseDetailedInfo/CourseDetailedInfo";
import { useGetCourseInfoByIdQuery } from "@/utils/api/hooks/useGetCourseInfoQuery";
import { useParams } from "react-router-dom";

export const CoursePage = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const { isLoading, isError, data, error, isSuccess } = useGetCourseInfoByIdQuery(courseId!);
    return(
        <div className="py-6 md:px-20 px-2 space-y-4">
            {data && (
                <CourceDetailedInfo course={data!} />
            )}
            {isError && <span>Произошла ошибка</span>}
      
        </div>
    )
}