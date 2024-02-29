import { useQuery } from "@tanstack/react-query"
import { getMyCourses } from "../requests/GroupsCampusCourses/myCourses"

export const useGetMyCoursesQuery = (settings?: QuerySettings<typeof getMyCourses>) =>
  { 
    return (
      useQuery({
        queryKey: ['getMyCourses'],
        queryFn: getMyCourses,
        ...settings?.options
      })
    )
  }