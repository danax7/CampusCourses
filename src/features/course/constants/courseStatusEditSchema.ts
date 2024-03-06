import * as z from 'zod';

export const courseStatusEditSchema = z.object({
  status: z.string().min(1, {
    message: 'validation.required',
  }),
});

export type CourseStatusEditSchema = z.infer<typeof courseStatusEditSchema>;
