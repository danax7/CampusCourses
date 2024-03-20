import * as z from 'zod';

export const courseEditDescriptionSchema = z.object({
  requirements: z.string().min(1, {
    message: 'validation.required',
  }),
  annotations: z.string().min(1, {
    message: 'validation.required',
  }),
});

export type CourseEditDescriptionSchema = z.infer<typeof courseEditDescriptionSchema>;
