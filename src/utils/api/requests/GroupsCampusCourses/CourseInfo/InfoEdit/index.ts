import { api } from "@/utils/api/instance";

export const putEditCourse = async ({ id, data }: { id: string; data: any }) =>
  api.put(`courses/${id}`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
