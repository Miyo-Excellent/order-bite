import { z } from 'zod';

export const RemoveRecipePayload = z.object({
  id: z.string(),
  to: z.enum(['breakfast', 'dinners', 'desserts']),
});

export type RemoveRecipePayload = z.infer<typeof RemoveRecipePayload>;
