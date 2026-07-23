"use server"

import { prisma } from "../db/prisma-helper"
import type { SiteSettings } from "../generated/prisma"
import { formatError } from "../utils"
import {
  emailSettingsSchema,
  generalSettingsSchema,
  servicePageSettingsSchema,
  socialSettingsSchema,
} from "../validators"

type ActionResponse = {
  success: boolean
  message: string
  data: unknown
}

const settingsId = "site-settings"

type SiteSettingsPayload = {
  siteName?: string
  [key: string]: string | boolean | null | undefined
}

function getOptionalString(formData: FormData, key: string): string | undefined {
  const value = formData.get(key)

  if (value == null) {
    return undefined
  }

  const text = String(value).trim()
  return text === "" ? undefined : text
}

function getStringList(formData: FormData, key: string): string | undefined {
  const values = formData
    .getAll(key)
    .map((value) => String(value).trim())
    .filter(Boolean)

  return values.length > 0 ? JSON.stringify(values) : undefined
}

export async function getSettings(): Promise<SiteSettings | undefined> {
  try {
    const siteSetting = await prisma.siteSettings.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return siteSetting ?? undefined;
  } catch {
    return undefined;
  }
}


async function upsertSiteSettings(data: SiteSettingsPayload): Promise<ActionResponse> {
  try {
    await prisma.siteSettings.upsert({
      where: {
        id: settingsId,
      },
      create: {
        id: settingsId,
        ...data,
        siteName: data.siteName ?? "",
      },
      update: data,
    });

    const setting = await getSettings();

    return {
      success: true,
      message: "Settings saved successfully",
      data: setting ?? {},
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
      data: "",
    };
  }
}

export async function saveGeneralSettings(formData: FormData): Promise<ActionResponse> {

  const payload = {
    siteName: String(formData.get("siteName") ?? "").trim(),
    legalName: getOptionalString(formData, "legalName"),
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
  }
  const parsed = generalSettingsSchema.parse(payload)
  return upsertSiteSettings(parsed)
}

export async function saveEmailSettings(formData: FormData): Promise<ActionResponse> {
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

export async function saveSocialSettings(formData: FormData): Promise<ActionResponse> {
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

export async function saveServicePageSettings(formData: FormData): Promise<ActionResponse> {
  const payload = {
    siteName: String(formData.get("siteName") ?? "").trim(),
    serviceHeroTitle: getOptionalString(formData, "serviceHeroTitle"),
    serviceHeroDescription: getOptionalString(formData, "serviceHeroDescription"),
    serviceDeliveryTagline: getOptionalString(formData, "serviceDeliveryTagline"),
    serviceDeliveryTitle: getOptionalString(formData, "serviceDeliveryTitle"),
    serviceDeliveryDescription: getOptionalString(formData, "serviceDeliveryDescription"),
    serviceDeliveryCards: getOptionalString(formData, "serviceDeliveryCards"),
  }

  const parsed = servicePageSettingsSchema.parse(payload)
  return upsertSiteSettings(parsed)
}

export async function saveHomePageSettings(formData: FormData): Promise<ActionResponse> {
  const payload = {
    siteName: String(formData.get("siteName") ?? "").trim(),
    legalName: getOptionalString(formData, "legalName"),
    teamMembers: getOptionalString(formData, "teamMembers"),
    happyCustomers: getOptionalString(formData, "happyCustomers"),
    operationalSupport: getOptionalString(formData, "operationalSupport"),
    aboutTagline: getOptionalString(formData, "aboutTagline"),
    aboutTitle: getOptionalString(formData, "aboutTitle"),
    aboutDescription: getOptionalString(formData, "aboutDescription"),
    aboutButtons: getStringList(formData, "aboutButtons"),
    heroTrustTags: getOptionalString(formData, "trustMetrics"),
    deliveryModelTitle: getOptionalString(formData, "deliveryModelTitle"),
    deliveryModelItems: getStringList(formData, "deliveryModelItems"),
    whyClientsTagline: getOptionalString(formData, "whyClientsTagline"),
    whyClientsTitle: getOptionalString(formData, "whyClientsTitle"),
    whyClientsDescription: getOptionalString(formData, "whyClientsDescription"),
    whyClientsCards: getOptionalString(formData, "whyClientsCards"),
    globalDeliveryTagline: getOptionalString(formData, "globalDeliveryTagline"),
    globalDeliveryTitle: getOptionalString(formData, "globalDeliveryTitle"),
    globalDeliveryDescription: getOptionalString(formData, "globalDeliveryDescription"),
    globalDeliveryImagePath: getOptionalString(formData, "globalDeliveryImagePath"),
  }

  if (!payload.siteName) {
    return {
      success: false,
      message: "Site name is required",
      data: "",
    }
  }

  return upsertSiteSettings(payload)
}


