import { z } from "zod";

export const IdInParams = z.object({
  id: z.string().min(1),
});

export type IdInParams = z.infer<typeof IdInParams>;
