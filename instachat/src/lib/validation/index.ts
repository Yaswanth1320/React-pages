import { z } from "zod";

export const signUpValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2, { message: "Too short" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Must be 8 characters" }),
});

export const signInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Must be 8 characters" }),
});
