import { z } from "zod";

export const signUpSchema = z
  .object({
    fullname: z.string().min(3, "Fullname must be at least 3 characters long"),
    email: z.string().email(),
    phone: z.string().max(15, "enter a valid number"),
    password: z.string().min(6, "password must be 6 characters"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "password doesnt match confirm password",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "password must be 6 characters"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const emailSchema = z.object({
  email: z.string().email(),
});

export type TEmailSchema = z.infer<typeof emailSchema>;

// const validatePhoneNumber = (phoneNumber: string) => {
//   const phoneNumberPattern = /^\d{10}$/; // Validates a 10-digit phone number

//   return phoneNumberPattern.test(phoneNumber);
// };

export const passwordSchema = z
  .object({
    password: z.string().min(8, "password must be 8 characters"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "password doesnt match confirm password",
    path: ["confirmPassword"],
  });

export type TPasswordSchema = z.infer<typeof passwordSchema>;
