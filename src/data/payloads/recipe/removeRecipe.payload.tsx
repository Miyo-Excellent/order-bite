import { z } from 'zod';

export const RemoveRecipePayload = z.object({
  id: z.string(),
  to: z.enum([
    'breakfasts',
    'cocktails',
    'desserts',
    'dinners',
    'drinks',
    'lunches'
  ]),
});

export type RemoveRecipePayload = z.infer<typeof RemoveRecipePayload>;
