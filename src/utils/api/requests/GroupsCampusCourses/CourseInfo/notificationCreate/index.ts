import { api } from "@/utils/api/instance";

export const postCreateNotification = async ({ id, data }: { id: string; data: any }) =>
  api.post(`courses/${id}/notifications`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
