import * as z from 'zod';

export const courseEditSchema = z.object({
  requirements: z.string().min(1, {
    message: 'validation.required',
  }),
  annotations: z.string().min(1, {
    message: 'validation.required',
  }),
});

export type CourseEditSchema = z.infer<typeof courseEditSchema>;
