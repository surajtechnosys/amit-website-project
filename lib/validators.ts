import z from "zod";
import { Status } from "./generated/prisma/enums";
import { ApplicationStatus, EmploymentType, WorkMode } from "@prisma/client";

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

export const generalSettingsSchema = z.object({
  siteName: z.string().min(1, "Site name is required"),
  legalName: z.string().optional(),
  tagline: z.string().optional(),
  description: z.string().optional(),
  primaryEmail: z.email().optional().or(z.literal("")),
  primaryPhone: z.string().optional(),
  websiteUrl: z.string().url().optional().or(z.literal("")),
  timezone: z.string().optional(),
  officeAddress: z.string().optional(),
  officeHours: z.string().optional(),
  logoPath: z.string().optional(),
  faviconPath: z.string().optional(),
  mapUrl: z.string().optional(),
  showPhone: z.boolean().default(true),
  showEmail: z.boolean().default(true),
});

export const emailSettingsSchema = z.object({
  smtpHost: z.string().optional(),
  smtpPort: z.string().optional(),
  smtpUsername: z.string().optional(),
  smtpPassword: z.string().optional(),
  fromName: z.string().optional(),
  fromEmail: z.email().optional().or(z.literal("")),
  replyToEmail: z.email().optional().or(z.literal("")),
  supportInbox: z.email().optional().or(z.literal("")),
  emailSignature: z.string().optional(),
  enableNotifications: z.boolean().default(true),
  storeDrafts: z.boolean().default(false),
});

export const socialSettingsSchema = z.object({
  facebookUrl: z.string().optional(),
  instagramUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  youtubeUrl: z.string().optional(),
  whatsappUrl: z.string().optional(),
  messengerUrl: z.string().optional(),
  socialBio: z.string().optional(),
  showSocialIcons: z.boolean().default(true),
  openLinksNewTab: z.boolean().default(true),
});

export const serviceCategorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "name is required"),
  description: z.string().optional(),
  status: z.enum(Object.values(Status)),
  createdAt: z.date().nullable().optional(),
  updatedAt: z.date().nullable().optional(),
});

const sectionSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(255),
  description: z.string().trim().optional(),
  items: z.array(z.string().trim().min(1, "Item cannot be empty")).min(1, "At least one item is required"),
});

const contentSectionSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(255),
  description: z.string().trim().optional(),
});

const capabilitiesSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(255),
  description: z.string().trim().optional(),
  items: z.array(z.string().trim().min(1, "Item cannot be empty")).min(1, "At least one item is required"),
});

const outcomeFocusSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(255),
  description: z.string().trim().optional(),
  items: z.array(z.string().trim().min(1, "Item cannot be empty")).min(1, "At least one item is required"),
});

export const serviceSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(1, "Service title is required").max(255),
  shortDescription: z.string().trim().min(1, "Short description is required").max(500),
  description: z.string().trim().min(1, "Description is required"),
  image: z.union([z.instanceof(File), z.string().nullable()]).optional(),
  status: z.enum(Object.values(Status)),
  categoryId: z.string().min(1, "Category ID is required"),
  serviceBenefits: capabilitiesSchema,
  capabilities: capabilitiesSchema,
  deliveryProcess: sectionSchema,
  outcomeFocuses: outcomeFocusSchema,
  contactSection: contentSectionSchema,
});

export const newsletterSchema = z.object({
  id: z.string().optional(),
  email: z.string().trim().min(1, "Email is required"),
  status: z.enum(Object.values(Status)),
});

export const testimonialSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  designation: z.string().min(1, "Designation is required"),
  company: z.string().min(1, "Company is required"),
  tag: z.string().min(1, "Tag is required"),
  content: z.string().min(1, "Content is required"),
  image: z.union([z.instanceof(File), z.string().nullable()]),
  status: z.enum(Object.values(Status)),
  createdAt: z.date().nullable().optional(),
  updatedAt: z.date().nullable().optional(),
});

export const jobSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(3, "Title must be at least 3 characters."),
  shortDescription: z.string().trim().min(10, "Short description must be at least 10 characters."),
  description: z.string().trim().optional(),
  employmentType: z.enum(Object.values(EmploymentType)),
  workMode: z.enum(Object.values(WorkMode)),
  experience: z.string().trim().optional(),
  location: z.string().trim().optional(),
  vacancies: z.coerce.number().int("Vacancies must be a whole number.").min(1, "Vacancies must be at least 1.").optional(),
  status: z.enum(Object.values(Status)).default(Status.ACTIVE),
  createdAt: z.date().nullable().optional(),
  updatedAt: z.date().nullable().optional(),
});

export const applicationSchema = z.object({
  id: z.string().optional(),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required"),
  phone: z.string().min(1, "Phone is required"),
  role: z.string().min(1, "Role is required"),
  experience: z.string().min(1, "Experience is required"),
  location: z.string().min(1, "Location is required"),
  jobId: z.string().min(1, "Please select a job"),
  resume: z.union([z.instanceof(File), z.string().nullable()]),
  message: z.string().optional(),
  status: z.enum(Object.values(ApplicationStatus)).default(ApplicationStatus.PENDING),
  createdAt: z.date().nullable().optional(),
  updatedAt: z.date().nullable().optional(),
});

