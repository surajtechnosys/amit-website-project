import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  CloudCog,
  Gauge,
  Headphones,
  LineChart,
  RefreshCcw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services | AS Services",
  description:
    "Explore AS Services capabilities across back office operations, analytics, technical support, IT consulting, managed services, and recovery support.",
}

const services = [
  {
    id: "back-office",
    icon: Boxes,
    title: "Back Office Operations",
    summary:
      "Reliable operational support for documentation, process execution, client coordination, and workflow management.",
    features: [
      "Administrative processing",
      "Workflow tracking",
      "Documentation management",
      "Quality checks",
    ],
    color: "cyan",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics & Dashboards",
    summary:
      "Clear reporting systems that convert operational data into measurable business insight.",
    features: [
      "Performance dashboards",
      "Data cleanup",
      "Trend reporting",
      "Management insights",
    ],
    color: "violet",
  },
  {
    id: "technical-support",
    icon: Headphones,
    title: "Technical Support Services",
    summary:
      "Responsive support teams for issue handling, troubleshooting, user assistance, and service continuity.",
    features: [
      "Help desk support",
      "Incident response",
      "User communication",
      "Escalation management",
    ],
    color: "emerald",
  },
  {
    id: "consulting",
    icon: Wrench,
    title: "IT Consulting Services",
    summary:
      "Practical technology guidance for implementation planning, automation, systems, and operations.",
    features: [
      "Technology advisory",
      "Implementation planning",
      "Automation support",
      "Process improvement",
    ],
    color: "amber",
  },
  {
    id: "managed-services",
    icon: CloudCog,
    title: "IT Managed Services",
    summary:
      "Ongoing technical operations support to keep teams productive, systems stable, and work moving.",
    features: [
      "System monitoring",
      "Cloud operations",
      "Maintenance support",
      "Service governance",
    ],
    color: "sky",
  },
  {
    id: "recovery-support",
    icon: RefreshCcw,
    title: "Recovery Support Services",
    summary:
      "Specialized operational support for recovery workflows, case handling, coordination, and reporting.",
    features: [
      "Case coordination",
      "Portfolio tracking",
      "Recovery reporting",
      "Process controls",
    ],
    color: "rose",
  },
]

const deliveryPoints = [
  {
    icon: ShieldCheck,
    title: "Quality Controls",
    description: "Defined checks, documented processes, and review loops for consistent delivery.",
  },
  {
    icon: Gauge,
    title: "Scalable Teams",
    description: "Flexible delivery capacity that can expand with your workload and priorities.",
  },
  {
    icon: Settings2,
    title: "Process Discipline",
    description: "Clear ownership, practical SOPs, and measurable operational routines.",
  },
  {
    icon: LineChart,
    title: "Visible Outcomes",
    description: "Dashboards and reporting that make performance easier to monitor and improve.",
  },
]

const colorClasses = {
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  sky: "bg-sky-50 text-sky-700 border-sky-200",
  violet: "bg-violet-50 text-violet-700 border-violet-200",
}

export default function ServicePage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#062B36] pt-32 text-white sm:pt-36">
        <div className="absolute inset-0 service-grid opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,43,54,0.72),rgba(15,23,42,0.96))]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
              <Sparkles className="size-4" />
              Integrated services for growing operations
            </div>

            <h1 className="mt-7 text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              Services built for scale, support, and smarter delivery.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              AS Services combines operations, analytics, IT support, and
              consulting into one focused delivery model, helping teams move
              faster with dependable execution and visible outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-full bg-cyan-300 px-6 text-slate-950 hover:bg-white">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Discuss a Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a
                href="#services-list"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative min-h-[340px] lg:min-h-[420px]">
            <div className="service-console absolute inset-0 rounded-lg border border-white/12 bg-white/10 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="size-2.5 rounded-full bg-cyan-300" />
                  <span className="size-2.5 rounded-full bg-emerald-300" />
                  <span className="size-2.5 rounded-full bg-amber-300" />
                </div>
                <span className="text-xs font-semibold text-slate-300">
                  DELIVERY STACK
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                {["Operations", "Analytics", "Support", "Consulting"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="service-meter rounded-lg border border-white/10 bg-slate-950/35 p-4"
                      style={{ animationDelay: `${index * 180}ms` }}
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-white">{item}</span>
                        <span className="text-cyan-200">Active</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <span className="service-meter-fill block h-full rounded-full bg-cyan-300" />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">
              Complete Service List
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Choose the support your team needs next.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each service is designed to plug into real business workflows,
              improve delivery discipline, and give leadership clearer visibility.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <article
                  id={service.id}
                  key={service.title}
                  className="service-card group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 service-shine" />
                  <div
                    className={[
                      "inline-flex size-12 items-center justify-center rounded-lg border",
                      colorClasses[service.color as keyof typeof colorClasses],
                    ].join(" ")}
                  >
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.summary}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/service/${service.id}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition group-hover:text-cyan-700"
                  >
                    View service details
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">
              Delivery Method
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Advanced support, grounded in operational discipline.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We keep the model simple for your team: define the workflow,
              assign ownership, measure the output, and improve the process.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {deliveryPoints.map((point, index) => {
              const Icon = point.icon

              return (
                <div
                  key={point.title}
                  className="service-step rounded-lg border border-slate-200 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.05)]"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <Icon className="size-7 text-cyan-700" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {point.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg bg-[#062B36] p-6 text-white sm:p-10">
            <div className="absolute inset-0 service-grid opacity-20" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Need a custom service mix?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Tell us where your team needs help. We can combine operations,
                  analytics, support, and consulting into a practical delivery plan.
                </p>
              </div>
              <Button asChild size="lg" className="h-12 rounded-full bg-cyan-300 px-6 text-slate-950 hover:bg-white">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .service-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 42px 42px;
          animation: serviceGridMove 18s linear infinite;
        }

        .service-console {
          animation: servicePanelIn 700ms ease-out both;
        }

        .service-meter {
          animation: serviceSlideIn 650ms ease-out both;
        }

        .service-meter-fill {
          width: 86%;
          animation: serviceFill 1.4s ease-out both;
        }

        .service-card,
        .service-step {
          animation: serviceFadeUp 680ms ease-out both;
          transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
        }

        .service-card:hover,
        .service-step:hover {
          transform: translateY(-6px);
          border-color: rgba(14, 116, 144, 0.35);
          box-shadow: 0 20px 55px rgba(15, 23, 42, 0.12);
        }

        .service-shine {
          background: linear-gradient(90deg, #06b6d4, #8b5cf6, #10b981, #06b6d4);
          background-size: 220% 100%;
          animation: serviceShine 3.8s linear infinite;
        }

        @keyframes serviceGridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 42px 42px;
          }
        }

        @keyframes servicePanelIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes serviceSlideIn {
          from {
            opacity: 0;
            transform: translateX(22px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes serviceFill {
          from {
            width: 18%;
          }
          to {
            width: 86%;
          }
        }

        @keyframes serviceFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes serviceShine {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 220% 50%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-grid,
          .service-console,
          .service-meter,
          .service-meter-fill,
          .service-card,
          .service-step,
          .service-shine {
            animation: none;
          }

          .service-card:hover,
          .service-step:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}
