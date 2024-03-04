import { deleteCourse } from "@/utils/api/requests/GroupsCampusCourses/delete";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface UseCampusCourseCardProps{
    courseId: string
}
export const useCampusCourseCard = ( {courseId} : UseCampusCourseCardProps) => {
    const queryClient = useQueryClient();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteCourse = async () => {
    setIsDeleting(true); 
    try {
      await deleteCourse({params: { id: courseId }});
      queryClient.invalidateQueries({queryKey: ['groupCourses', courseId]});
    } finally {
      setIsDeleting(false);
    }
  };

  return {handleDeleteCourse, isDeleting}

}