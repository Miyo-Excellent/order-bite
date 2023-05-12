import { z } from 'zod';

export const IsLoadingPayload = z.boolean();

export type IsLoadingPayload = z.infer<typeof IsLoadingPayload>;
