import * as z from 'zod';

export const editStudentMarkSchema = z.object({
  mark: z.string().min(1, {
    message: 'validation.required',
  }),
  markType: z.string().min(1, {
    message: 'validation.required',
  }),
});

export type EditStudentMarkSchema = z.infer<typeof editStudentMarkSchema>;
