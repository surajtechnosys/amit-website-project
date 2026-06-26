import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Headset,
  RefreshCcw,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  {
    href: "/services/back-office-operations",
    icon: Boxes,
    title: "Back Office Operations",
    description:
      "Reliable process support, documentation handling, and day-to-day execution.",
    accent: "from-cyan-400 to-sky-500",
    points: [
      "Administrative processing",
      "Workflow tracking",
      "Documentation management",
      "Quality checks",
    ],
  },
  {
    href: "/services/reporting-analytics",
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Clear dashboards and reporting that help teams make faster decisions.",
    accent: "from-violet-400 to-fuchsia-500",
    points: [
      "Performance dashboards",
      "Data cleanup",
      "Trend reporting",
      "Management insights",
    ],
  },
  {
    href: "/services/technical-support",
    icon: Headset,
    title: "Technical Support",
    description:
      "Practical support for systems, users, and operational follow-through.",
    accent: "from-emerald-400 to-teal-500",
    points: [
      "Help desk support",
      "Incident response",
      "User communication",
      "Escalation management",
    ],
  },
  {
    href: "/services/recovery-support-services",
    icon: RefreshCcw,
    title: "Recovery Support Services",
    description:
      "Specialized support designed for recovery workflows and service continuity.",
    accent: "from-amber-400 to-orange-500",
    points: [
      "Recovery coordination",
      "Business continuity",
      "Risk review",
      "Compliance support",
    ],
  },
]

const strengths = [
  "Structured delivery",
  "Clear communication",
  "Scalable support",
  "Quality-focused execution",
]

export const metadata = {
  title: "About | AS Services",
  description:
    "Learn about AS Services and the core service areas we provide across operations, analytics, technical support, and recovery support.",
}

function ServiceCard({
  href,
  icon: Icon,
  title,
  description,
  accent,
  points = [],
}: {
  href: string
  icon: typeof Boxes
  title: string
  description: string
  accent: string
  points?: string[]
}) {
  return (
    <Link href={href} className="group block h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-orange-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/40">
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.025),transparent_35%)]" />

        <div className="relative flex h-full flex-col">
          <div className="flex size-12 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-cyan-700 shadow-[0_8px_20px_rgba(14,165,233,0.08)]">
            <Icon className="size-5" />
          </div>
          <h3 className="mt-5 text-[1.05rem] font-semibold tracking-tight text-slate-950 sm:text-[1.15rem]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

          <div className="mt-5 space-y-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition group-hover:gap-3">
            View service details
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-[#eef3f8] text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.05),transparent_34%),radial-gradient(circle_at_80%_0,rgba(8,145,178,0.08),transparent_26%),linear-gradient(180deg,rgba(248,250,252,0.92)_0%,rgba(236,242,248,1)_100%)]" />

      <section className="relative isolate overflow-hidden py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur">
                <ShieldCheck className="size-4 text-white" />
                About AS Services
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-orange-500 sm:text-5xl lg:text-6xl">
                Focused services that help teams run better.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                We help organizations strengthen operations, improve reporting,
                and support critical workflows with a calm, dependable delivery
                model.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="default" className="rounded-full px-6 bg-blue-500 text-white hover:bg-blue-700">
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Talk to us
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-600 bg-white/70 px-6 text-blue-500"
                >
                  <Link href="/services" className="inline-flex items-center gap-2">
                    View services
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {strengths.map((strength) => (
                  <span
                    key={strength}
                    className="inline-flex items-center rounded-full border border-blue-600 bg-white/90 px-4 py-2 text-sm font-medium text-blue-600 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2rem] border border-blue-400 border-[2px] bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-6">
                <div className="">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.34em] text-orange-500">
                    <ShieldCheck className="size-4 text-cyan-700" />
                    Our focus
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-blue-500 sm:text-3xl">
                    Clear service areas. Clean delivery. Measurable support.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    We keep the story simple so clients can quickly understand
                    where we add value and how we work.
                  </p>

                  <div className="mt-6 grid gap-3">
                    {[
                      {
                        icon: Boxes,
                        label: "Operations",
                        text: "Structured execution that keeps work organized.",
                      },
                      {
                        icon: BarChart3,
                        label: "Analytics",
                        text: "Reporting that brings clarity to decisions.",
                      },
                      {
                        icon: Headset,
                        label: "Support",
                        text: "Responsive help for ongoing service needs.",
                      },
                    ].map((item) => {
                      const Icon = item.icon

                      return (
                        <div
                          key={item.label}
                          className="flex items-start gap-4 rounded-2xl border border-blue-500 border-[2px] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                        >
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)]">
                            <Icon className="size-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm font-semibold text-orange-500">
                                {item.label}
                              </h3>
                              <CheckCircle2 className="size-4 text-cyan-600" />
                            </div>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-orange-500">
              Core services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-blue-500 sm:text-4xl lg:text-5xl">
              The main services we provide.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              These are the service lines we want visitors to notice first:
              practical, high-value, and designed to support dependable
              operations.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                href={service.href}
                icon={service.icon}
                title={service.title}
                description={service.description}
                points={service.points}
                accent={service.accent}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-orange-200 bg-black text-white shadow-[0_24px_80px_rgba(2,6,23,0.2)]">
            <div className="flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white/55">
                  Next step
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Need a reliable operations partner?
                </h2>
                <p className="mt-4 text-base leading-7 text-white/75">
                  Reach out if you want a team that can support your operations,
                  reporting, or technical workflows with more clarity and less
                  friction.
                </p>
              </div>

              <Button asChild size="lg" className="rounded-full bg-white px-6 text-slate-950 hover:bg-slate-100">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Contact us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
