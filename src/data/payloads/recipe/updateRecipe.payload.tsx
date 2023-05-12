import { z } from 'zod';

export const UpdateRecipePayload = z.object({
  to: z.enum([
    'breakfasts',
    'cocktails',
    'desserts',
    'dinners',
    'drinks',
    'lunches'
  ]),
  id: z.string(),
  data: z.object({
    name: z.string().max(60).nonempty(),
    image: z.string().url().nonempty(),
    description: z.string().max(2000).optional().default(''),
    price: z.number().positive().default(0)
  })
});

export type UpdateRecipePayload = z.infer<typeof UpdateRecipePayload>;
