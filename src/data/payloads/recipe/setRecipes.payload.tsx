import { z } from 'zod';
import { RecipeModel } from '@models/recipe.model.tsx';

export const SetRecipesPayload = z.object({
  data: z.array(RecipeModel),
  to: z.enum(['breakfast', 'dinners', 'desserts'])
});

export type SetRecipesPayload = z.infer<typeof SetRecipesPayload>;
