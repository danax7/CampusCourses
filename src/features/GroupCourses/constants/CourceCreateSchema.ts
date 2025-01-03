import * as z from 'zod';

export const courceCreateSchema = z.object({
  name: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  startYear: z.coerce
    .number()
    .max(2029, 'Курс не может начинаться позже 2029 года')
    .min(2000, 'Начало курса не может быть назначено раньше 2000 года'),
  maximumStudentsCount: z.coerce
    .number()
    .max(200, 'Курс не может содержать больше 200 человек')
    .min(1, 'Курс должен содержать больше 1 человека'),
  semester: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  requirements: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  annotations: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  mainTeacherId: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
});

export type CourseCreateSchema = z.infer<typeof courceCreateSchema>;
