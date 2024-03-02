import { api } from "@/utils/api/instance";

export const getMyCourses = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
    return api.get<CampusCourseDto[]>('/courses/my', { headers });
  };