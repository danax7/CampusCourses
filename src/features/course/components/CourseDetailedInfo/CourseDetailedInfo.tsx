import { Button } from "@/components/ui";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { cn } from "@/utils";
import { statusTexts } from "@/utils/constants/statusTexts";
import { getStatusColor } from "@/utils/helpers/getStatusColor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { CourseStatusEditDialog } from "../../dialogs/CourseStatusEditDialog";

  
interface CourceDetailedInfoProps{
    course: CampusCourseFullDto;
}

export const CourceDetailedInfo = ({course} : CourceDetailedInfoProps) => {
    console.log(course)
    return (
        <div>
            <span className='text-3xl font-semibold'>{course.name}</span>
            <Card className='m-2'>
                <CardHeader>
                    <CardTitle className='flex justify-between'>
                        <span>Основные данные курса </span>
                        <Button variant='secondary'>Редактировать</Button>
                    </CardTitle>
                </CardHeader>
                <CardContent className='space-y-2'>
                    <div className='flex justify-between flex-auto border-2 p-3 rounded-md items-center'>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-medium'>Статус курса</h3>
                            <span className={cn(getStatusColor(course.status))}>{statusTexts[course.status]}</span>
                        </div>
                        {/* {userRole.isAdmin && ( */}
                            <CourseStatusEditDialog 
                                trigger={
                                    <Button variant='secondary'>Изменить</Button>
                                }
                                status={course.status}
                            />
                        {/* )} */}
                      
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
            </Card>
            <Tabs defaultValue="requirements" className="m-2 border-2 p-3 rounded-md">
                <TabsList className='w-full'>
                    <TabsTrigger value="requirements" className='flex-auto'>Требования к курсу</TabsTrigger>
                    <TabsTrigger value="annotations" className='flex-auto'>Аннотации</TabsTrigger>
                    <TabsTrigger value="notifications" className='flex-auto'>Уведомления</TabsTrigger>
                </TabsList>
                <TabsContent value="requirements">{course.requirements}</TabsContent>
                <TabsContent value="annotations">{course.annotations}</TabsContent>
                <TabsContent value="notifications">
                    <Button className='my-3'>         
                        <PlusCircledIcon className='mr-2 h-4 w-4' />
                            Создать уведомление
                    </Button>
                    <div>
                        {course.notifications.length === 0 && (
                            <span>
                                Уведомлений пока нет
                            </span>
                        )}
                        {course.notifications.map((notification, index)=> (
                            <div key={index}>
                                <span>{notification.name}</span>
                                <span>{notification.isImportant}</span>
                            </div>
                        ))}
                    </div>
                
                </TabsContent>
            </Tabs>

            <Tabs defaultValue="teachers" className="m-2 border-2 p-3 rounded-md">
                <TabsList className='w-full'>
                    <TabsTrigger value="teachers" className='flex-auto'>Преподаватели</TabsTrigger>
                    <TabsTrigger value="students" className='flex-auto'>Студенты</TabsTrigger>
                </TabsList>
                <TabsContent value="teachers">
                    <Button className='my-3'>         
                    <PlusCircledIcon className='mr-2 h-4 w-4' />
                        Добавить Преподавателя
                    </Button>
                    <div>
                        {course.teachers.map((teacher, index)=> (
                            <div key={index} className='flex flex-col border-2 p-4 rounded-md'>
                                <div className='space-x-2'>
                                    <span className='font-semibold'>{teacher.name}</span>
                                    <Badge>{teacher.isMain && 'основной'}</Badge>
                                </div>
                                <span>{teacher.email}</span>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="students">
                    {course.annotations}
                </TabsContent>
            </Tabs>

        </div>
    )
}