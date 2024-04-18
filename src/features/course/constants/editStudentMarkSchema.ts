import * as z from 'zod';

export const editStudentMarkSchema = z.object({
  mark: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  markType: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
});

export type EditStudentMarkSchema = z.infer<typeof editStudentMarkSchema>;
