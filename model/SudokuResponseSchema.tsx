import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";


const SudokuResponseSchema = z.object({
  result: z.array(z.array(z.number().min(0).max(9))),
  is_solved: z.boolean(),
});

export default SudokuResponseSchema;
