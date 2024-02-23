import * as z from 'zod';

export const registrationSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'validation.required'
    })
    .email({
      message: 'validation.email.format'
    }),
  password: z.string().min(1, {
    message: 'validation.required'
  }),
  confirmPassword: z.string().min(1, {
    message: 'validation.required'
  }),
  birthDate: z.string().min(1, {
    message: 'validation.required'
  }),
  fullName: z.string().min(1, {
    message: 'validation.required'
  }),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
