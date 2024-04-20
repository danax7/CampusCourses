import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Это обязательное поле',
    })
    .email({
      message: 'validation.email.format',
    }),
  password: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
