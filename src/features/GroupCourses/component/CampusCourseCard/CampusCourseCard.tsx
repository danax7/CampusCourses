import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/utils";
import { selectUserRoles } from "@/utils/AuthSlice/slice";
import { statusTexts } from "@/utils/constants/statusTexts";
import { getStatusColor } from "@/utils/helpers/getStatusColor";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCampusCourseCard } from "./hooks/useCampusCourseCard";

interface CampusCourseCardProps{
    course: CampusCourseDto
}

export const CampusCourseCard = ({course}: CampusCourseCardProps ) => {
    const { handleDeleteCourse, isDeleting } = useCampusCourseCard({ courseId: course.id }); // Change course.id to courseId
  
    const role = useSelector(selectUserRoles);
    
    return(
        <Card key={course.id}>
        <CardHeader>
            <CardTitle className='flex justify-between'>
                <div className='flex flex-col space-y-3 m-1'>
                    <Link to={`/courses/${course.id}`}>
                        <span>{course.name}</span>
                    </Link>
                    {role.isAdmin && 
                    <Button className='w-32' onClick={handleDeleteCourse} loading={isDeleting}>
                        Удалить курс
                        </Button>}
                </div>
                <span className={cn('text-xl', getStatusColor(course.status))}>{statusTexts[course.status]}</span>
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
    )

}