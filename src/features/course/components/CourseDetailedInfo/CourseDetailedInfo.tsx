import { Button } from "@/components/ui";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { cn } from "@/utils";
import { statusTexts } from "@/utils/constants/statusTexts";
import { getStatusColor } from "@/utils/helpers/getStatusColor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

  
interface CourceDetailedInfoProps{
    course: CampusCourseFullDto;
}

export const CourceDetailedInfo = ({course} : CourceDetailedInfoProps) => {

    return (
        <div>
            <span className='text-3xl font-semibold'>{course.name}</span>
            <Card className='m-2'>
                <CardHeader>
                    <CardTitle>Основные данные курса</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                </CardHeader>
                <CardContent className='space-y-2'>
                    <div className='flex justify-between flex-auto border-2 p-3 rounded-md items-center'>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-medium'>Статус курса</h3>
                            <span className={cn(getStatusColor(course.status))}>{statusTexts[course.status]}</span>
                        </div>
                        <Button variant='secondary'>Изменить</Button>
                    </div>

                    <div className='flex justify-between flex-auto border-2 p-3 rounded-md items-center'>
                        <div className='flex flex-col w-1/2'>
                            <h3 className='text-lg font-medium'>Учебный год</h3>
                            <span>{course.startYear}</span>
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <h3 className='text-lg font-medium'>Семестр</h3>
                            <span>{course.semester == 'Autumn' ? 'Осенний' : 'Весенний'}</span>
                        </div>
                    </div>

                    <div className='flex justify-between flex-auto border-2 p-3 rounded-md items-center'>
                        <div className='flex flex-col w-1/2'>
                            <h3 className='text-lg font-medium'>Всего мест</h3>
                            <span>{course.maximumStudentsCount}</span>
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <h3 className='text-lg font-medium'>Студентов зачислено</h3>
                            <span>{course.studentsEnrolledCount}</span>
                        </div>
                    </div>

                    <div className='flex justify-between flex-auto border-2 p-3 rounded-md items-center'>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-medium'>Заявок на рассмотрении</h3>
                            <span>{course.studentsInQueueCount}</span>
                        </div>
                    </div>
                    
            
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            <Tabs defaultValue="requirements" className="m-2 border-2 p-3 w-full rounded-md">
                <TabsList>
                    <TabsTrigger value="requirements" className='flex-auto'>Требования к курсу</TabsTrigger>
                    <TabsTrigger value="annotations" className='flex-auto'>Аннотации</TabsTrigger>
                </TabsList>
                <TabsContent value="requirements">{course.requirements}</TabsContent>
                <TabsContent value="annotations">{course.annotations}</TabsContent>
            </Tabs>

        </div>
    )
}