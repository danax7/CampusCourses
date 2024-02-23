import { api } from '@/utils/api/instance';

interface RequestParams {
    params: any;
    config?: any;
}

export const deleteGroup = async ({ params}: RequestParams) => api.delete(`groups/${params.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }
);
    