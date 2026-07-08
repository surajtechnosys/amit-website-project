"use server";

import { prisma } from "../db/prisma-helper";
import { applicationSchema } from "../validators";
import { formatError, omitTimestamps } from "../utils";
import { Application } from "../types";
import { z } from "zod";

type ActionResponse = {
  success: boolean;
  message: string;
};

export async function getApplications(): Promise<Application[]> {
  try {
    const applications = await prisma.careerApplication.findMany({
      orderBy: { createdAt: "desc" },
    });

    return applications;
  } catch (error) {
    return [];
  }
}

export async function createApplication(data: z.infer<typeof applicationSchema>): Promise<ActionResponse> {
  // try {

    console.log(data)
    const application = applicationSchema.parse(data);


    await prisma.careerApplication.create({
      data: {
        fullName: application.fullName,
        email: application.email,
        phone: application.phone,
        role: application.role,
        experience: application.experience,
        location: application.location,
        resume: application.resume as string,
        message: application.message || "",
        jobId: application.jobId,
        status: application.status,
      },
    });

    return {
      success: true,
      message: "Application created successfully",
    };
  // } catch (error) {
  //   return {
  //     success: false,
  //     message: formatError(error),
  //   };
  // }
}

export async function getApplicationById(id: string) {
  try {
    const application = await prisma.careerApplication.findUnique({
      where: { id }
    });

    if (!application) {
      return {
        success: false,
        message: "application not found",
      };
    }

    return {
      success: true,
      data: omitTimestamps(application),
      message: "Application fetched successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}

export async function updateApplication(
  data: z.infer<typeof applicationSchema>,
  id: string
): Promise<ActionResponse> {
  try {
    const application = applicationSchema.parse(data);

    const imageValue =
      application.resume instanceof File
        ? application.resume.name
        : application.resume ?? null;

    const updateData: any = {
      fullName: application.fullName,
      email: application.email,
      phone: application.phone,
      role: application.role,
      experience: application.experience,
      location: application.location,
      resume: imageValue as string,
      message: application.message || "",
      jobId: application.jobId,
      status: application.status,
    };

    await prisma.careerApplication.update({
      where: { id },
      data: updateData,
    });

    return {
      success: true,
      message: "Career Application updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}

export async function deleteApplication(id: string): Promise<ActionResponse> {
  try {
    await prisma.careerApplication.delete({
      where: { id },
    });

    return {
      success: true,
      message: "Application deleted successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}
