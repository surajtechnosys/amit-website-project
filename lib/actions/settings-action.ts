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
}

const settingsId = "site-settings"

type SiteSettingsInput = Parameters<typeof prisma.siteSettings.upsert>[0]["create"]

async function upsertSiteSettings(data: Partial<Omit<SiteSettingsInput, "id">>): Promise<ActionResponse> {
  try {
    // Prefer updating existing settings so callers can pass partial payloads.
    await prisma.siteSettings.update({ where: { id: settingsId }, data })

    return { success: true, message: "Settings saved successfully" }
  } catch (error: any) {
    try {
      // If update failed (likely because the record doesn't exist), create it.
      await prisma.siteSettings.create({
        data: { id: settingsId, siteName: data.siteName ?? "", ...data },
      })

      return { success: true, message: "Settings saved successfully" }
    } catch (createError) {
      return { success: false, message: formatError(createError) }
    }
  }
}

export async function saveGeneralSettings(formData: FormData): Promise<ActionResponse> {
  const payload = {
    siteName: String(formData.get("siteName") ?? ""),
    legalName: String(formData.get("legalName") ?? "") || null,
    tagline: String(formData.get("tagline") ?? "") || null,
    description: String(formData.get("description") ?? "") || null,
    primaryEmail: String(formData.get("primaryEmail") ?? "") || null,
    primaryPhone: String(formData.get("primaryPhone") ?? "") || null,
    websiteUrl: String(formData.get("websiteUrl") ?? "") || null,
    timezone: String(formData.get("timezone") ?? "") || null,
    officeAddress: String(formData.get("officeAddress") ?? "") || null,
    officeHours: String(formData.get("officeHours") ?? "") || null,
    logoPath: String(formData.get("logoPath") ?? "") || null,
    faviconPath: String(formData.get("faviconPath") ?? "") || null,
    mapUrl: String(formData.get("mapUrl") ?? "") || null,
    showPhone: formData.get("showPhone") === "on",
    showEmail: formData.get("showEmail") === "on",
  }

  const parsed = generalSettingsSchema.parse(payload)
  return upsertSiteSettings(parsed)
}

export async function saveEmailSettings(formData: FormData): Promise<ActionResponse> {
  const payload = {
    smtpHost: String(formData.get("smtpHost") ?? "") || null,
    smtpPort: String(formData.get("smtpPort") ?? "") || null,
    smtpUsername: String(formData.get("smtpUsername") ?? "") || null,
    smtpPassword: String(formData.get("smtpPassword") ?? "") || null,
    fromName: String(formData.get("fromName") ?? "") || null,
    fromEmail: String(formData.get("fromEmail") ?? "") || null,
    replyToEmail: String(formData.get("replyToEmail") ?? "") || null,
    supportInbox: String(formData.get("supportInbox") ?? "") || null,
    emailSignature: String(formData.get("emailSignature") ?? "") || null,
    enableNotifications: formData.get("enableNotifications") === "on",
    storeDrafts: formData.get("storeDrafts") === "on",
  }

  const parsed = emailSettingsSchema.parse(payload)
  return upsertSiteSettings(parsed)
}

export async function saveSocialSettings(formData: FormData): Promise<ActionResponse> {
  const payload = {
    facebookUrl: String(formData.get("facebookUrl") ?? "") || null,
    instagramUrl: String(formData.get("instagramUrl") ?? "") || null,
    linkedinUrl: String(formData.get("linkedinUrl") ?? "") || null,
    youtubeUrl: String(formData.get("youtubeUrl") ?? "") || null,
    whatsappUrl: String(formData.get("whatsappUrl") ?? "") || null,
    messengerUrl: String(formData.get("messengerUrl") ?? "") || null,
    socialBio: String(formData.get("socialBio") ?? "") || null,
    showSocialIcons: formData.get("showSocialIcons") === "on",
    openLinksNewTab: formData.get("openLinksNewTab") === "on",
  }

  const parsed = socialSettingsSchema.parse(payload)
  return upsertSiteSettings(parsed)
}
