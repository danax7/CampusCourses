import * as z from 'zod';

export const courseStatusEditSchema = z.object({
  status: z.enum(['Created', 'OpenForAssigning', 'Started', 'Finished']),
});

export type CourseStatusEditSchema = z.infer<typeof courseStatusEditSchema>;
