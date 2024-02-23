import axios from 'axios';

export const BASE_URL = 'https://camp-courses.api.kreosoft.space';

export const api = axios.create({
  baseURL: BASE_URL,
});