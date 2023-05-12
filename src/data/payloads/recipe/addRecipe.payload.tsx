import { z } from 'zod';
import { RecipeModel } from '@models/recipe.model.tsx';

export const AddRecipePayload = z.object({
  to: z.enum([
    'breakfasts',
    'cocktails',
    'desserts',
    'dinners',
    'drinks',
    'lunches'
  ]),
  data: RecipeModel
});

export type AddRecipePayload = z.infer<typeof AddRecipePayload>;
