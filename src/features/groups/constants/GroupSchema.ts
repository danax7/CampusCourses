import * as z from 'zod';

export const groupSchema = z.object({
  name: z.string().min(1, {
    message: 'validation.required',
  }),
});

export type GroupSchema = z.infer<typeof groupSchema>;
