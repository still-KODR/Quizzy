import { z } from "zod";

export const createTestSchema = z.object({
  body: z.object({}),
});

export const updateTestSchema = z.object({
  body: z.object({}),
  params: z.object({}),
});

export const testIdSchema = z.object({
  params: z.object({}),
});

