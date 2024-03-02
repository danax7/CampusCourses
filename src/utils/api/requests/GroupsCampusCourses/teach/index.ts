import { api } from "@/utils/api/instance";

export const getTeachCourses = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
    return api.get<CampusCourseDto[]>('/courses/teaching', { headers });
  };