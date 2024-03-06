import axios from 'axios';
import { toast } from 'sonner';

export const BASE_URL = 'https://camp-courses.api.kreosoft.space';

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 500) {
      toast.error(`Ошибка сервера:${error.response.data.message}`, {
        cancel: { label: 'Close' },
      });
    }
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
