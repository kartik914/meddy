import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.string().optional(),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  name: z.string().min(1, { message: "Name is required" }),
});

export const RegisterVendorSchema = z.object({
  shopName: z.string().min(1, { message: "Shop Name is required" }),
  email: z.string().email({
    message: "Enter a valid email",
  }),
  phone: z.string().min(1, { message: "Phone is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  pinCode: z
    .string()
    .min(6, { message: "Pin Code must be 6 characters" })
    .max(6, { message: "Pin Code must be 6 characters" }),
  link: z.string().url({
    message: "Enter a valid Google Maps link",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

export const SettingsSchema = z
  .object({
    name: z
      .string()
      .min(1, {
        message: "Name is required",
      })
      .optional(),
    isTwoFactorEnabled: z.boolean().optional(),
    role: z.enum([UserRole.ADMIN, UserRole.USER]).optional(),
    email: z
      .string()
      .email({
        message: "Enter a valid email",
      })
      .optional(),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }).optional(),
    newPassword: z.string().min(8, { message: "Password must be at least 8 characters" }).optional(),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New Password is required",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required",
      path: ["password"],
    }
  );
