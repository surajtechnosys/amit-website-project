import z from "zod";
import { Status } from "./generated/prisma/enums";

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "User name is required"),
  email: z.email().min(1, "User email is required"),
  // image: z.string().min(6, "User image is required").optional(),
  image: z.union([z.instanceof(File), z.string().nullable()]).optional(),
  password: z.string().min(1, "User password is required"),
  status: z.enum(Object.values(Status)),
  createdAt: z.date().nullable().optional(),
  updatedAt: z.date().nullable().optional(),
});

export const bannerSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "title is required"),
  description: z.string().min(1, "description is required"),
  image: z.union([z.instanceof(File), z.string().nullable()]).optional(),
  status: z.enum(Object.values(Status)),
  createdAt: z.date().nullable().optional(),
  updatedAt: z.date().nullable().optional(),
});

export const enquirySchema = z.object({
  id: z.string().optional(),
  fullName: z.string().min(1, "fullName is required"),
  email: z.email().min(1, "email is required"),
  companyName: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  createdAt: z.date().nullable().optional(),
  updatedAt: z.date().nullable().optional(),
});