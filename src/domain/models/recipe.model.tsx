import { z } from 'zod';

export const RecipeModel = z.object({
  id: z.string(),
  name: z.string().max(60).nonempty(),
  image: z.string().url().nonempty(),
  description: z.string().max(2000).optional().default(''),
  price: z.number().positive().default(0)
});

export type RecipeModel = z.infer<typeof RecipeModel>;
