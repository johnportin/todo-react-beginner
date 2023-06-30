import * as z from 'zod';

const todoSchema = z.object({
  description: z
    .string()
    .min(1, { message: 'todo must be at least 1 character' })
    .max(255, { message: 'todo must be less than 255 characters' }),
});

export default todoSchema;
