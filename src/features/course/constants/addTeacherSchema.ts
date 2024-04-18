import * as z from 'zod';

export const addTeacherSchema = z.object({
  userId: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
});

export type AddTeacherSchema = z.infer<typeof addTeacherSchema>;
