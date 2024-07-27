import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateWithoutAuthorInput> = z
  .object({
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional(),
  })
  .strict();

export const PostCreateWithoutAuthorInputObjectSchema = Schema;
