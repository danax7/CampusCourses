import { api } from "@/utils/api/instance";

export type PostEditStudentMarkParams = {
    courseId: string;
    studentId: string;
    data: EditCourseStudentMarkDto;
}

export const postEditStudentMark = async ({ courseId, studentId, data }: PostEditStudentMarkParams) => {
    return api.post(`courses/${courseId}/marks/${studentId}`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
};
