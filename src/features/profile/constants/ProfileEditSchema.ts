import * as z from 'zod';

export const profileEditSchema = z.object({
  birthDate: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  fullName: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
});

export type ProfileEditSchema = z.infer<typeof profileEditSchema>;
