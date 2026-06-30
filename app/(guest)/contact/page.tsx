import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock3, Mail, MapPin, Phone, Sparkles } from "lucide-react"

import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact | AS Services",
  description:
    "Contact AS Services for back office operations, analytics, technical support, IT consulting, managed services, and recovery support.",
}

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-9212174507",
    href: "tel:+919212174507",
    note: "Speak with a team member directly.",
    accent: "from-orange-500 to-orange-600",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@asservices.com",
    href: "mailto:info@asservices.com",
    note: "Send your requirement and we'll reply promptly.",
    accent: "from-blue-500 to-sky-500",
  },
  {
    icon: MapPin,
    label: "Delivery",
    value: "Flexible across time zones",
    href: "/services",
    note: "We support clients with responsive remote delivery.",
    accent: "from-cyan-500 to-blue-500",
  },
]

const quickPoints = [
  "Fast response and clear next steps",
  "Operations, analytics, and IT support enquiries",
  "Practical guidance for scope and delivery",
]

function ContactCard({
  icon: Icon,
  label,
  value,
  note,
  href,
  accent,
}: (typeof contactCards)[number]) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-orange-200 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.03),transparent_35%)]" />

      <div className="relative flex h-full flex-col">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-cyan-700 shadow-[0_10px_24px_rgba(14,165,233,0.08)] transition-transform duration-300 group-hover:scale-105">
          <Icon className="size-5" />
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
          {label}
        </p>

        <p className="mt-2 text-[1.06rem] font-semibold tracking-tight text-slate-950">
          {value}
        </p>

        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
          {note}
        </p>

        <div className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-slate-700 transition group-hover:text-cyan-700">
          Contact now
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  )
}

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-[#eef3f8] text-slate-900 pb-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_80%_0,rgba(249,115,22,0.09),transparent_26%),linear-gradient(180deg,rgba(248,250,252,0.95)_0%,rgba(236,242,248,1)_100%)]" />

      <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur">
              <Sparkles className="size-4 text-cyan-700" />
              Contact AS Services
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Let&apos;s talk about the support your team needs.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Reach out for back office operations, reporting and analytics,
              technical support, consulting, or recovery support. We&apos;ll help
              you understand the best next step quickly and clearly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/service"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition hover:bg-white hover:text-slate-950"
              >
                View services
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {contactCards.map((card) => (
                <ContactCard key={card.label} {...card} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-orange-300/15 blur-3xl" />

            <div
              id="contact-form"
              className="rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-6"
            >
              <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.34em] text-slate-500">
                  <Clock3 className="size-4 text-cyan-700" />
                  Quick enquiry
                </div>
        

              </div>

              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
