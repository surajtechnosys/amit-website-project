"use server";

import { prisma } from "../db/prisma-helper";
import { enquirySchema } from "../validators";
import { formatError, omitTimestamps } from "../utils";
import { z } from "zod";

type ActionResponse = {
  success: boolean;
  message: string;
};

export async function getEnquiry() {
  const enquires = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return enquires;
}

export async function createEnquiry(data: z.infer<typeof enquirySchema>): Promise<ActionResponse> {
  try {
    const enquiry = enquirySchema.parse(data);

    await prisma.enquiry.create({
      data: {
        fullName: enquiry.fullName,
        email: enquiry.email,
        companyName: enquiry.companyName,
        subject: enquiry.subject,
        message: enquiry.message,
        phoneNumber: enquiry.phoneNumber,
      },
    });

    return {
      success: true,
      message: "Enquiry created successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}

export async function getEnquiryById(id: string) {
  try {
    const enquiry = await prisma.enquiry.findUnique({
      where: { id }
    });

    if (!enquiry) {
      return {
        success: false,
        message: "Enquiry not found",
      };
    }

    return {
      success: true,
      data: omitTimestamps(enquiry),
      message: "Enquiry fetched successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}
