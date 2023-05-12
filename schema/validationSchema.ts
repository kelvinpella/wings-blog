import { z } from "zod";

export const SearchPostSchema = z.object({
  word: z.string({ required_error: "This field cannot be empty!" }),
});
