import { z } from 'zod';
import { RecipeModel } from '@models/recipe.model.tsx';

export const AddShoppingCarPayload = RecipeModel;

export type AddShoppingCarPayload = z.infer<typeof AddShoppingCarPayload>;
