import { z } from 'zod';
import { RecipeModel } from '@models/recipe.model.tsx';

export const SetRecipesPayload = z.object({
  data: z.array(RecipeModel),
  to: z.enum([
    'breakfasts',
    'cocktails',
    'desserts',
    'dinners',
    'drinks',
    'lunches'
  ])
});

export type SetRecipesPayload = z.infer<typeof SetRecipesPayload>;
