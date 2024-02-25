import { api } from "@/utils/api/instance";

export const getCourseInfoById = async (id: string) => {
    const response = await api.get<CampusCourseFullDto>(`/courses/${id}/details`,{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
}