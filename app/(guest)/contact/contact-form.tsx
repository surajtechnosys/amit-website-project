"use client"

import * as React from "react"
import { Building2, Loader2, Mail, MessageSquareText, Phone, UserRound } from "lucide-react"

import { createEnquiry } from "@/lib/actions/enquiry-action"
import { Button } from "@/components/ui/button"

const subjectOptions = [
  "Back Office Operations",
  "Data Analytics & Dashboards",
  "Technical Support Services",
  "IT Consulting Services",
  "IT Managed Services",
  "Recovery Support Services",
  "General Enquiry",
]

type EnquiryValues = {
  fullName: string
  email: string
  phoneNumber: string
  companyName: string
  subject: string
  message: string
}

const defaultValues: EnquiryValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  subject: "",
  message: "",
}

function FieldShell({
  children,
  icon: Icon,
}: {
  children: React.ReactNode
  icon: typeof UserRound
}) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
      {children}
    </div>
  )
}

export function ContactForm() {
  const [values, setValues] = React.useState<EnquiryValues>(defaultValues)
  const [status, setStatus] = React.useState<{
    type: "success" | "error"
    message: string
  } | null>(null)
  const [isPending, startTransition] = React.useTransition()

  function updateValue(name: keyof EnquiryValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
    if (status) {
      setStatus(null)
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    startTransition(async () => {
      const response = await createEnquiry(values)

      if (!response.success) {
        setStatus({
          type: "error",
          message: response.message,
        })
        return
      }

      setValues(defaultValues)
      setStatus({
        type: "success",
        message: "Thanks. Your message has been sent successfully.",
      })
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="contact-full-name" className="text-sm font-semibold text-slate-800">
            Full Name
          </label>
          <FieldShell icon={UserRound}>
            <input
              id="contact-full-name"
              value={values.fullName}
              onChange={(event) => updateValue("fullName", event.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              placeholder="Your name"
              required
            />
          </FieldShell>
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-email" className="text-sm font-semibold text-slate-800">
            Email Address
          </label>
          <FieldShell icon={Mail}>
            <input
              id="contact-email"
              type="email"
              value={values.email}
              onChange={(event) => updateValue("email", event.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              placeholder="you@example.com"
              required
            />
          </FieldShell>
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-phone" className="text-sm font-semibold text-slate-800">
            Phone Number
          </label>
          <FieldShell icon={Phone}>
            <input
              id="contact-phone"
              type="tel"
              value={values.phoneNumber}
              onChange={(event) => updateValue("phoneNumber", event.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              placeholder="+91"
              required
            />
          </FieldShell>
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-company" className="text-sm font-semibold text-slate-800">
            Company Name
          </label>
          <FieldShell icon={Building2}>
            <input
              id="contact-company"
              value={values.companyName}
              onChange={(event) => updateValue("companyName", event.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              placeholder="Company or organization"
            />
          </FieldShell>
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <label htmlFor="contact-subject" className="text-sm font-semibold text-slate-800">
          Service Interest
        </label>
        <select
          id="contact-subject"
          value={values.subject}
          onChange={(event) => updateValue("subject", event.target.value)}
          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          {subjectOptions.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 grid gap-2">
        <label htmlFor="contact-message" className="text-sm font-semibold text-slate-800">
          Message
        </label>
        <div className="relative">
          <MessageSquareText className="pointer-events-none absolute left-3 top-3.5 size-4 text-slate-400" />
          <textarea
            id="contact-message"
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
            className="min-h-36 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
            placeholder="Briefly describe your requirement, timeline, or support need."
            required
          />
        </div>
      </div>

      {status ? (
        <div
          className={[
            "mt-5 rounded-xl border px-4 py-3 text-sm",
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-700",
          ].join(" ")}
        >
          {status.message}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500">
          We respond with clear next steps and practical guidance.
        </p>
        <Button
          type="submit"
          size="lg"
          className="h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 text-white shadow-[0_12px_30px_rgba(249,115,22,0.22)] transition hover:translate-y-[-1px] hover:from-orange-500 hover:to-orange-500"
          disabled={isPending}
        >
          {isPending ? <Loader2 className="size-4 animate-spin" /> : null}
          Send Message
        </Button>
      </div>
    </form>
  )
}
