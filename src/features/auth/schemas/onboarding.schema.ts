import * as z from "zod";

export const onboardingSchema = z.object({
  name: z
    .string()
    .nonempty({ error: "Name is required" })
    .max(255, { error: "255 characters maximum" }),
});
