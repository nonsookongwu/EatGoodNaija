import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(3, "Fullname must be at least 3 characters long"),
    email: z.string().email(),
    phoneNumber: z.string().max(15, "enter a valid number"),
    password: z.string().min(8, "password must be 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password doesnt match confirm password",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;


export const emailSchema = z.object({
  email: z.string().email()
});

export type TEmailSchema = z.infer<typeof emailSchema>



// const validatePhoneNumber = (phoneNumber: string) => {
  //   const phoneNumberPattern = /^\d{10}$/; // Validates a 10-digit phone number

  //   return phoneNumberPattern.test(phoneNumber);
  // };


export const passwordSchema = z
  .object({
    password: z.string().min(8, "password must be 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password doesnt match confirm password",
    path: ["confirmPassword"],
  });

  export type TPasswordSchema = z.infer<typeof passwordSchema>;