import { api } from "@/utils/api/instance";

export type PostEditStudentStatusParams = {
    courseId: string;
    studentId: string;
    data: EditStudentStatusDto;
}

export const postEditStudentStatus = async ({ courseId, studentId, data }: PostEditStudentStatusParams) => {
    return api.post(`courses/${courseId}/student-status/${studentId}`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
};
