import { Button } from "@/components/ui";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { cn } from "@/utils";
import { StudentMarkTexts, StudentStatusTexts, statusTexts } from "@/utils/constants/statusTexts";
import { getStatusColor, getStudentMarkColor, getStudentStatusColor } from "@/utils/helpers/getStatusColor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { CourseStatusEditDialog } from "../../dialogs/CourseStatusEditDialog";
import { CreateNotificationDialog } from "../../dialogs/CreateNotificationDialog";
import { CourseEditInfoDialog } from "../../dialogs/CourseEditInfoDialog";
import { AddTeacherDialog } from "../../dialogs/AddTeacherDialog";
import { selectUserRoles } from "@/utils/AuthSlice/slice";
import { useSelector } from "react-redux";
import { useCourseDetailedInfo } from "./hooks/useCourseDetailedInfo";
import { EditStudentMarkDialog } from "../../dialogs/EditStudentMarkDialog";
  
interface CourceDetailedInfoProps{
    course: CampusCourseFullDto;
}

export const CourceDetailedInfo = ({course} : CourceDetailedInfoProps) => {
    const userRole = useSelector(selectUserRoles);
    const {handleSignUpForCourse, isLoading,isEditStatusLoading, handleChangeUserStatus} = useCourseDetailedInfo(course.id);

    return (
        <div>
            <span className='text-3xl font-semibold'>{course.name}</span>
            <Card className='m-2'>
                <CardHeader>
                    <CardTitle className='flex justify-between'>
                        <span>Основные данные курса </span>
                         {userRole.isAdmin && (
                            <CourseEditInfoDialog 
                                trigger={
                                    <Button variant='secondary'>Редактировать</Button>
                                }
                                requirments={course.requirements}
                                annotations={course.annotations}
                            />
                        )} 
                    </CardTitle>
                </CardHeader>
                <CardContent className='space-y-2'>
                    <div className='flex justify-between flex-auto border-2 p-3 rounded-md items-center'>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-medium'>Статус курса</h3>
                            <span className={cn(getStatusColor(course.status))}>{statusTexts[course.status]}</span>
                        </div>
                         {userRole.isAdmin && ( 
                            <CourseStatusEditDialog 
                                trigger={
                                    <Button variant='secondary'>Изменить</Button>
                                }
                                status={course.status}
                            />
                        )}
                        {(!userRole.isAdmin && course.status==="OpenForAssigning")&& (
                            <Button onClick={handleSignUpForCourse} loading={isLoading}>
                                Записаться на курс
                            </Button>
                        )}
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
                        {userRole.isAdmin && ( 
                          <CreateNotificationDialog 
                                trigger={
                                    <Button className='my-3'>         
                                        <PlusCircledIcon className='mr-2 h-4 w-4' />
                                            Создать уведомление
                                    </Button>
                                }
                            />
                         )}
                    <div>
                        {course.notifications.length === 0 && (
                            <span>
                                Уведомлений пока нет
                            </span>
                        )}
                        {course.notifications.map((notification, index)=> (
                        <div key={index} className={cn('flex flex-col border-2 p-4 rounded-md', notification.isImportant && 'bg-destructive')}>
                            <div className='space-x-2'>
                                <span className='font-semibold'>{notification.text}</span>
                                {/* {notification.isImportant && 
                                    <Badge className='bg-destructive'>
                                        важное
                                    </Badge>
                                } */}
                            </div>
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
                    {userRole.isAdmin && (
                        <AddTeacherDialog 
                        trigger={
                            <Button className='my-1'>
                                <PlusCircledIcon className='mr-2 h-4 w-4' />
                                Добавить Преподавателя
                            </Button>
                        }
                    />
                )}
                    <div className='gap-3 flex flex-col'>
                        {course.teachers.map((teacher, index)=> (
                            <div key={index} className='flex flex-col border-2 p-4 rounded-md'>
                                <div className='space-x-2'>
                                    <span className='font-semibold'>{teacher.name}</span>
                                    {teacher.isMain && <Badge>основной</Badge>}
                                </div>
                                <span>{teacher.email}</span>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="students" className='space-y-2'>
                        {course.students.map((student)=> (
                            <div key={student.id} className='flex border-2 p-4 rounded-md items-center'>
                                
                                <div className='flex flex-col flex-auto'>
                                    <div className='space-x-2'>
                                        <span className='font-semibold'>{student.name}</span>
                                    </div>
                                    <span>{student.email}</span>
                                    <span>
                                        Статус - <span className={cn(getStudentStatusColor(student.status))}>{StudentStatusTexts[student.status]}</span>
                                    </span>
                                </div>
                                {student.status !== 'Declined' && student.status!=='InQueue' &&(
                                    <>
                                       <div className='flex-auto'>
                                            <EditStudentMarkDialog 
                                                trigger={
                                                    <div>    
                                                        <h4 className='cursor-pointer underline'>
                                                            Промежуточная аттестация - 
                                                        </h4>
                                                        <Badge className={cn(getStudentMarkColor(student.midtermResult))}>{StudentMarkTexts[student.midtermResult!]}</Badge>
                                                    </div>
                                                }
                                                markType="Midterm"
                                                studentId={student.id}
                                            />
                                        </div>
                                        <div className='flex-auto'>
                                            <EditStudentMarkDialog 
                                                trigger={
                                                    <div>   
                                                        <h4 className='cursor-pointer underline'>
                                                            Финальная аттестация - 
                                                        </h4>
                                                        <Badge className={cn(getStudentMarkColor(student.finalResult))}>{StudentMarkTexts[student.finalResult!]}</Badge>
                                                    </div>
                                                }
                                                markType="Final"
                                                studentId={student.id}
                                            />
                                        </div>
                                    </>
                                )}
                             
                             
                                {(student.status !== 'Accepted' && student.status !== 'Declined') && (
                                    <div className='flex gap-2 my-2'>
                                        <Button onClick={() => handleChangeUserStatus(student.id, 'Accepted')} loading={isEditStatusLoading}>Принять</Button>
                                        <Button onClick={() => handleChangeUserStatus(student.id, 'Declined')} loading={isEditStatusLoading}>Отклонить</Button>
                                    </div>
                                )}
                            </div>
                        ))}
                </TabsContent>
            </Tabs>

        </div>
    )
}