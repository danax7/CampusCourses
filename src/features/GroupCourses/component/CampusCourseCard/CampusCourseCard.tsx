import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/utils";
import { Link } from "react-router-dom";

interface CampusCourseCardProps{
    course: CampusCourseDto
}

const statusTexts: Record<СourseStatus, string> = {
    'OpenForAssigning': 'Открыт для записи',
    'Created': 'Создан',
    'Started': 'В процессе обучения',
    'Finished': 'Завершен',
};

const getStatusColor = (status: СourseStatus) => {
    switch (status) {
        case 'OpenForAssigning':
            return 'text-green-600';
        case 'Created':
            return 'text-current';
        case 'Started':
            return 'text-blue-600';
        case 'Finished':
            return 'text-destructive';
        default:
            return '';
    }
};

export const CampusCourseCard = ({course}: CampusCourseCardProps ) => (
    <Card key={course.id}>
                <CardHeader>
                    <CardTitle className='flex justify-between'>
                        <Link to={`/courses/${course.id}`}>
                            <span>{course.name}</span>
                        </Link>
                        <span className={cn(getStatusColor(course.status))}>{statusTexts[course.status]}</span>
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