import { z } from 'zod';
import { RecipeModel } from '@models/recipe.model.tsx';

export const SetShoppingCarPayload = z.array(RecipeModel);

export type SetShoppingCarPayload = z.infer<typeof SetShoppingCarPayload>;
