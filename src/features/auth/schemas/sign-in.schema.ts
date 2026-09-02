import * as z from "zod";

export const signInSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { error: "At least 8 characters" })
    .max(255, { error: "255 characters maximum" })
    .refine((val) => /[A-Z]/.test(val), {
      error: "At least one uppercase letter",
    })
    .refine((val) => /[a-z]/.test(val), {
      error: "At least one lowercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
      error: "At least one digit",
    })
    .refine((val) => /[.!@#$%^&*]/.test(val), {
      error: "At least one special character",
    }),
});
