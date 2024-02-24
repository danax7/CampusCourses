import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { useGetGroupCoursesByIdQuery } from "@/utils/api/hooks/useGetGroupCoursesQuery";
import { useParams } from "react-router-dom";

export const GroupPage = () => {
    const { groupId } = useParams<{ groupId: string }>();
    const { isLoading, isError, data, error, isSuccess } = useGetGroupCoursesByIdQuery(groupId!);

    return(
        <div className='py-6 md:px-20 px-2 space-y-4'>
            {isSuccess && data && data.map((course) => (
                <Card key={course.id}>
                    <CardHeader>
                        <CardTitle className='flex justify-between'>
                            <span>{course.name}</span>
                            <span>{course.status}</span>
                        </CardTitle>
                        <CardDescription>
                            <p>Мест всего - {course.maximumStudentsCount}</p>
                            <p>Мест всего - свободно {course.remainingSlotsCount}</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Учебный год - {course.startYear}</p>
                        <p>Семестр - {course.semester}</p>
                    </CardContent>
                </Card>
            ))}
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error: {error.message}</p>}
            {isSuccess && data.length==0 && <div>У группы нет курсов на данный момент</div>}
        </div>
    )
}
