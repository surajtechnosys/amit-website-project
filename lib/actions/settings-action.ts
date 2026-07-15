"use server"

import { prisma } from "../db/prisma-helper"
import { formatError } from "../utils"
import {
  emailSettingsSchema,
  generalSettingsSchema,
  socialSettingsSchema,
} from "../validators"

type ActionResponse = {
  success: boolean
  message: string
  data: any
}

const settingsId = "site-settings"

type SiteSettingsInput = Parameters<typeof prisma.siteSettings.upsert>[0]["create"]

function getOptionalString(formData: FormData, key: string): string | undefined {
  const value = formData.get(key)

  if (value == null) {
    return undefined
  }

  const text = String(value).trim()
  return text === "" ? undefined : text
}

export async function getSettings() {
  try {
    const siteSetting = await prisma.siteSettings.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return siteSetting;
  } catch (error) {
    return [];
  }
}


async function upsertSiteSettings(
  data: Partial<Omit<SiteSettingsInput, "id">>
) {
  try {
    await prisma.siteSettings.upsert({
      where: {
        id: settingsId,
      },
      create: {
        id: settingsId,
        siteName: data.siteName ?? "",
        ...data,
      },
      update: data,
    });

    const setting = await getSettings();

    return {
      success: true,
      message: "Settings saved successfully",
      data: setting,
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
      data: "",
    };
  }
}

export async function saveGeneralSettings(formData: FormData): Promise<any> {

  const payload = {
    siteName: String(formData.get("siteName") ?? "").trim(),
    legalName: getOptionalString(formData, "legalName"),
    tagline: getOptionalString(formData, "tagline"),
    description: getOptionalString(formData, "description"),
    primaryEmail: getOptionalString(formData, "primaryEmail"),
    primaryPhone: getOptionalString(formData, "primaryPhone"),
    websiteUrl: getOptionalString(formData, "websiteUrl"),
    timezone: getOptionalString(formData, "timezone"),
    officeAddress: getOptionalString(formData, "officeAddress"),
    officeHours: getOptionalString(formData, "officeHours"),
    logoPath: getOptionalString(formData, "logoPath"),
    faviconPath: getOptionalString(formData, "faviconPath"),
    mapUrl: getOptionalString(formData, "mapUrl"),
    showPhone: formData.get("showPhone") === "on",
    showEmail: formData.get("showEmail") === "on",
    teamMembers: getOptionalString(formData, "teamMembers"),
    happyCustomers: getOptionalString(formData, "happyCustomers"),
    operationalSupport: getOptionalString(formData, "operationalSupport"),
  }
  const parsed = generalSettingsSchema.parse(payload)
  return upsertSiteSettings(parsed)
}

export async function saveEmailSettings(formData: FormData): Promise<any> {
  const payload = {
    smtpHost: getOptionalString(formData, "smtpHost"),
    smtpPort: getOptionalString(formData, "smtpPort"),
    smtpUsername: getOptionalString(formData, "smtpUsername"),
    smtpPassword: getOptionalString(formData, "smtpPassword"),
    fromName: getOptionalString(formData, "fromName"),
    fromEmail: getOptionalString(formData, "fromEmail"),
    replyToEmail: getOptionalString(formData, "replyToEmail"),
    supportInbox: getOptionalString(formData, "supportInbox"),
    emailSignature: getOptionalString(formData, "emailSignature"),
    enableNotifications: formData.get("enableNotifications") === "on",
    storeDrafts: formData.get("storeDrafts") === "on",
  }

  const parsed = emailSettingsSchema.parse(payload)
  return upsertSiteSettings(parsed)
}

export async function saveSocialSettings(formData: FormData): Promise<any> {
  const payload = {
    facebookUrl: getOptionalString(formData, "facebookUrl"),
    instagramUrl: getOptionalString(formData, "instagramUrl"),
    linkedinUrl: getOptionalString(formData, "linkedinUrl"),
    youtubeUrl: getOptionalString(formData, "youtubeUrl"),
    whatsappUrl: getOptionalString(formData, "whatsappUrl"),
    messengerUrl: getOptionalString(formData, "messengerUrl"),
    socialBio: getOptionalString(formData, "socialBio"),
    showSocialIcons: formData.get("showSocialIcons") === "on",
    openLinksNewTab: formData.get("openLinksNewTab") === "on",
  }

  const parsed = socialSettingsSchema.parse(payload)
  return upsertSiteSettings(parsed)
}
