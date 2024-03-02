import * as z from 'zod';

export const notificationCreateSchema = z.object({
    text: z.string().min(1, {
      message: 'validation.required'
    }),
    isImportant: z.string().min(1, {
        message: 'validation.required'
    }),

});

export type NotificationCreateSchema = z.infer<typeof notificationCreateSchema>;
