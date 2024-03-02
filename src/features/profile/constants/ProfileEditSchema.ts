import * as z from 'zod';

export const profileEditSchema = z.object({
  birthDate: z.string().min(1, {
    message: 'validation.required'
  }),
  fullName: z.string().min(1, {
    message: 'validation.required'
  }),
});

export type ProfileEditSchema = z.infer<typeof profileEditSchema>;
