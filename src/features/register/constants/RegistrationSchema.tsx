import * as z from 'zod';

export const registrationSchema = z.object({
  email: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  // .email({
  //   message: 'validation.email.format'
  // }),
  password: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  confirmPassword: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  birthDate: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  fullName: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
