import z from "zod";
import { bannerSchema, enquirySchema, userSchema } from "../validators";

export type User = z.infer<typeof userSchema>
export type Banner = z.infer<typeof bannerSchema>
export type Enquiry = z.infer<typeof enquirySchema>

