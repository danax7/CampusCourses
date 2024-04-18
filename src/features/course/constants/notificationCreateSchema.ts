import * as z from 'zod';

export const notificationCreateSchema = z.object({
  text: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
  isImportant: z.string().min(1, {
    message: 'Это обязательное поле',
  }),
});

export type NotificationCreateSchema = z.infer<typeof notificationCreateSchema>;
