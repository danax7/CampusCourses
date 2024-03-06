import { api } from '@/utils/api/instance';

export const postEditCourseStatus = async ({
  id,
  data,
}: {
  id: string;
  data: EditStudentStatusDto;
}) => {
  return api.post(`courses/${id}/status`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
