import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z][a-zA-Z ]*$/, "Name must start with a capital letter"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/\d{6,}/, "Password must contain at least 6 digits"),
});
