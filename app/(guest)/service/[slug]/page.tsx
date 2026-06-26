import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  CloudCog,
  FileCheck2,
  Gauge,
  Headphones,
  Layers3,
  LineChart,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"

type ServiceColor = "amber" | "cyan" | "emerald" | "rose" | "sky" | "violet"

const serviceDetails = [
  {
    slug: "back-office",
    icon: Boxes,
    color: "cyan",
    title: "Back Office Operations",
    eyebrow: "Operational execution",
    headline: "Structured back office support that keeps daily work moving.",
    summary:
      "A dependable operations layer for documentation, workflow handling, data maintenance, client coordination, and quality-focused process execution.",
    outcomes: [
      "Faster turnaround for repetitive operational work",
      "Cleaner documentation and better process visibility",
      "Lower internal workload for core client-facing teams",
      "Consistent quality checks across recurring tasks",
    ],
    capabilities: [
      "Administrative processing",
      "Document review and indexing",
      "Workflow queue management",
      "Client coordination support",
      "Quality audit assistance",
      "Operational reporting",
    ],
    process: [
      "Map the existing workflow and ownership points",
      "Define SOPs, quality rules, and escalation paths",
      "Launch a trained support team with tracked output",
      "Review performance and improve the operating rhythm",
    ],
    metrics: ["24/7-ready", "QA checks", "SOP-led"],
  },
  {
    slug: "analytics",
    icon: BarChart3,
    color: "violet",
    title: "Data Analytics & Dashboards",
    eyebrow: "Insight systems",
    headline: "Dashboards and reporting that make performance easier to act on.",
    summary:
      "Turn operational data into usable dashboards, recurring reports, and decision-ready insights for managers and delivery teams.",
    outcomes: [
      "Clear visibility into performance and workload",
      "Reduced manual reporting effort",
      "Better tracking for trends, exceptions, and gaps",
      "Reusable dashboards for leadership reviews",
    ],
    capabilities: [
      "Dashboard design",
      "Data cleaning and validation",
      "KPI and metric setup",
      "Trend and variance reporting",
      "Management reporting packs",
      "Operational insight support",
    ],
    process: [
      "Identify business questions and reporting users",
      "Prepare clean data views and metric definitions",
      "Build dashboards with review-ready layouts",
      "Refine insights with ongoing feedback cycles",
    ],
    metrics: ["KPI-ready", "Live views", "Trend-led"],
  },
  {
    slug: "technical-support",
    icon: Headphones,
    color: "emerald",
    title: "Technical Support Services",
    eyebrow: "Responsive support",
    headline: "Practical technical support for users, incidents, and continuity.",
    summary:
      "A trained support function for help desk requests, troubleshooting, communication, escalation handling, and service follow-through.",
    outcomes: [
      "Faster response to user issues",
      "More consistent incident handling",
      "Clearer communication during support workflows",
      "Improved continuity for day-to-day systems",
    ],
    capabilities: [
      "Help desk support",
      "Incident triage",
      "Troubleshooting assistance",
      "Ticket documentation",
      "Escalation management",
      "User communication",
    ],
    process: [
      "Define support categories and severity levels",
      "Set response rules, templates, and escalation paths",
      "Operate ticket queues with visible status tracking",
      "Review recurring issues and recommend improvements",
    ],
    metrics: ["Ticket-led", "SLA-aware", "User-first"],
  },
  {
    slug: "consulting",
    icon: Wrench,
    color: "amber",
    title: "IT Consulting Services",
    eyebrow: "Technology advisory",
    headline: "Implementation guidance for better systems, automation, and process design.",
    summary:
      "Practical consulting support to plan technology improvements, select operating approaches, and move implementation work forward.",
    outcomes: [
      "Clearer technology and implementation plans",
      "Better alignment between systems and business workflows",
      "Reduced friction during process transformation",
      "Practical automation opportunities identified",
    ],
    capabilities: [
      "IT implementation planning",
      "Process assessment",
      "Automation discovery",
      "System workflow design",
      "Operational advisory",
      "Change support",
    ],
    process: [
      "Review current systems, processes, and constraints",
      "Prioritize practical improvements and quick wins",
      "Design implementation steps with owners and timelines",
      "Support rollout, adoption, and iteration",
    ],
    metrics: ["Plan-first", "Automation", "Advisory"],
  },
  {
    slug: "managed-services",
    icon: CloudCog,
    color: "sky",
    title: "IT Managed Services",
    eyebrow: "Managed operations",
    headline: "Ongoing IT operations support for stable, productive teams.",
    summary:
      "Managed support for systems, monitoring, maintenance, cloud operations, and service routines that keep work flowing.",
    outcomes: [
      "More dependable system and service operations",
      "Reduced burden on internal technical teams",
      "Improved monitoring and maintenance discipline",
      "Better governance for recurring IT support needs",
    ],
    capabilities: [
      "System monitoring",
      "Cloud operations support",
      "Maintenance coordination",
      "Service governance",
      "Access and support routines",
      "Operational documentation",
    ],
    process: [
      "Audit systems, support needs, and operating risks",
      "Define monitoring, maintenance, and reporting routines",
      "Run managed support with documented ownership",
      "Review service health and improvement actions",
    ],
    metrics: ["Stable ops", "Monitored", "Governed"],
  },
  {
    slug: "recovery-support",
    icon: RefreshCcw,
    color: "rose",
    title: "Recovery Support Services",
    eyebrow: "Specialized workflow support",
    headline: "Process-driven recovery support for tracking, coordination, and reporting.",
    summary:
      "Specialized operational assistance for recovery workflows, case coordination, portfolio tracking, updates, and management reporting.",
    outcomes: [
      "More structured case and portfolio handling",
      "Clearer visibility into recovery workflow status",
      "Better coordination between field and office teams",
      "Consistent reporting and process controls",
    ],
    capabilities: [
      "Case coordination",
      "Portfolio tracking",
      "Recovery reporting",
      "Follow-up management",
      "Document support",
      "Process control checks",
    ],
    process: [
      "Understand case types, data flows, and reporting needs",
      "Define tracking structure and update routines",
      "Operate coordinated support with quality checks",
      "Share reporting insights and workflow improvements",
    ],
    metrics: ["Case-led", "Tracked", "Controlled"],
  },
] as const

const colorClasses: Record<
  ServiceColor,
  {
    badge: string
    icon: string
    glow: string
    line: string
  }
> = {
  amber: {
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    icon: "border-amber-200 bg-amber-50 text-amber-700",
    glow: "rgba(245,158,11,0.24)",
    line: "from-amber-300 via-orange-400 to-cyan-300",
  },
  cyan: {
    badge: "border-cyan-200 bg-cyan-50 text-cyan-700",
    icon: "border-cyan-200 bg-cyan-50 text-cyan-700",
    glow: "rgba(6,182,212,0.24)",
    line: "from-cyan-300 via-sky-400 to-emerald-300",
  },
  emerald: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    icon: "border-emerald-200 bg-emerald-50 text-emerald-700",
    glow: "rgba(16,185,129,0.24)",
    line: "from-emerald-300 via-cyan-300 to-sky-400",
  },
  rose: {
    badge: "border-rose-200 bg-rose-50 text-rose-700",
    icon: "border-rose-200 bg-rose-50 text-rose-700",
    glow: "rgba(244,63,94,0.2)",
    line: "from-rose-300 via-pink-400 to-cyan-300",
  },
  sky: {
    badge: "border-sky-200 bg-sky-50 text-sky-700",
    icon: "border-sky-200 bg-sky-50 text-sky-700",
    glow: "rgba(14,165,233,0.24)",
    line: "from-sky-300 via-cyan-300 to-violet-300",
  },
  violet: {
    badge: "border-violet-200 bg-violet-50 text-violet-700",
    icon: "border-violet-200 bg-violet-50 text-violet-700",
    glow: "rgba(139,92,246,0.22)",
    line: "from-violet-300 via-fuchsia-300 to-cyan-300",
  },
}

type Service = (typeof serviceDetails)[number]

function getService(slug: string) {
  return serviceDetails.find((service) => service.slug === slug)
}

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return {
      title: "Service Not Found | AS Services",
    }
  }

  return {
    title: `${service.title} | AS Services`,
    description: service.summary,
  }
}

function ServiceVisual({ service }: { service: Service }) {
  const color = colorClasses[service.color]

  return (
    <div className="relative min-h-[380px] lg:min-h-[480px]">
      <div
        className="absolute inset-8 rounded-full blur-3xl"
        style={{ backgroundColor: color.glow }}
      />
      <div className="detail-orbit absolute inset-0 rounded-lg border border-white/12 bg-white/10 p-5 shadow-[0_30px_110px_rgba(0,0,0,0.25)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-cyan-300 text-slate-950">
              <service.icon className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Service Engine
              </p>
              <p className="text-sm font-semibold text-white">{service.title}</p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            Active
          </span>
        </div>

        <div className="mt-6 grid gap-4">
          {service.metrics.map((metric, index) => (
            <div
              key={metric}
              className="detail-pulse rounded-lg border border-white/10 bg-slate-950/35 p-4"
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-white">{metric}</span>
                <span className="text-cyan-200">{84 + index * 5}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <span
                  className="detail-fill block h-full rounded-full bg-cyan-300"
                  style={{
                    animationDelay: `${250 + index * 160}ms`,
                    width: `${84 + index * 5}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {["Plan", "Run", "Improve"].map((item, index) => (
            <div
              key={item}
              className="detail-node rounded-lg border border-white/10 bg-white/5 p-3 text-center"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <p className="text-xs font-semibold text-cyan-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon
  const color = colorClasses[service.color]

  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#062B36] pt-32 text-white sm:pt-36">
        <div className="absolute inset-0 detail-grid opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,43,54,0.74),rgba(15,23,42,0.98))]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/service"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to services
            </Link>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
              <Sparkles className="size-4" />
              {service.eyebrow}
            </div>

            <h1 className="mt-7 text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              {service.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {service.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-cyan-300 px-6 text-slate-950 hover:bg-white"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Request Service
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a
                href="#capabilities"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Capabilities
              </a>
            </div>
          </div>

          <ServiceVisual service={service} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className={["inline-flex size-14 items-center justify-center rounded-lg border", color.icon].join(" ")}>
              <Icon className="size-6" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-slate-950 sm:text-4xl">
              What this service helps you improve
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The engagement is shaped around your team structure, workload,
              current bottlenecks, and reporting expectations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.outcomes.map((outcome, index) => (
              <div
                key={outcome}
                className="detail-card rounded-lg border border-slate-200 bg-slate-50 p-5"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <CheckCircle2 className="size-5 text-emerald-500" />
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className={["inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase", color.badge].join(" ")}>
                Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                A focused service package with room to adapt.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Use this service as a full operating function or combine selected
                capabilities with your existing team.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="detail-card rounded-lg border border-slate-200 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.05)]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <FileCheck2 className="size-5 text-cyan-700" />
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-800">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-8">
            <Layers3 className="size-9 text-cyan-700" />
            <h2 className="mt-5 text-3xl font-semibold text-slate-950">
              Delivery Process
            </h2>
            <div className="mt-8 grid gap-4">
              {service.process.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="border-b border-slate-200 pb-4">
                    <p className="text-sm leading-6 text-slate-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-[#062B36] p-6 text-white sm:p-8">
            <div className="absolute inset-0 detail-grid opacity-20" />
            <div className={["absolute inset-x-0 top-0 h-1 bg-gradient-to-r", color.line].join(" ")} />
            <div className="relative">
              <Target className="size-9 text-cyan-200" />
              <h2 className="mt-5 text-3xl font-semibold">
                Built around measurable outcomes.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                We keep engagement design practical: define the workflow, agree
                on the measures, operate with ownership, and review improvements
                at a steady rhythm.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  { icon: ShieldCheck, label: "Quality review loops" },
                  { icon: Gauge, label: "Performance tracking" },
                  { icon: LineChart, label: "Clear reporting cadence" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <item.icon className="size-5 text-cyan-200" />
                    <span className="text-sm font-medium text-slate-100">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Ready to discuss {service.title.toLowerCase()}?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Share your goals, current workflow, and support expectations.
                  We will help shape a practical delivery approach.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-full px-6">
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6">
                  <Link href="/service">All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .detail-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 44px 44px;
          animation: detailGridMove 18s linear infinite;
        }

        .detail-orbit {
          animation: detailPanelIn 700ms ease-out both, detailFloat 5s ease-in-out infinite 900ms;
        }

        .detail-pulse,
        .detail-node,
        .detail-card {
          animation: detailFadeUp 680ms ease-out both;
        }

        .detail-fill {
          animation: detailFill 1.2s ease-out both;
        }

        .detail-card {
          transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
        }

        .detail-card:hover {
          transform: translateY(-5px);
          border-color: rgba(14, 116, 144, 0.32);
          box-shadow: 0 18px 46px rgba(15, 23, 42, 0.1);
        }

        @keyframes detailGridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 44px 44px;
          }
        }

        @keyframes detailPanelIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes detailFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes detailFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes detailFill {
          from {
            transform: scaleX(0.24);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .detail-grid,
          .detail-orbit,
          .detail-pulse,
          .detail-node,
          .detail-card,
          .detail-fill {
            animation: none;
          }

          .detail-card:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}
