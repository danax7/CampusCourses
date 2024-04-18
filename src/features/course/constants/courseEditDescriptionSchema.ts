import * as z from 'zod';

export const courseEditDescriptionSchema = z.object({
  requirements: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  annotations: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
});

export type CourseEditDescriptionSchema = z.infer<typeof courseEditDescriptionSchema>;
