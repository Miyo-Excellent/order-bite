import { z } from 'zod';

export const RemoveShoppingCarPayload = z.number();

export type RemoveShoppingCarPayload = z.infer<typeof RemoveShoppingCarPayload>;
