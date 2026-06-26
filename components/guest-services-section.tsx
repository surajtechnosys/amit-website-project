import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Boxes,
  RefreshCcw,
  Settings2,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Boxes,
    title: "Back Office Operations",
    summary:
      "Administrative processing, documentation management, workflow support.",
    accent: "from-sky-500/20 to-cyan-500/10",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    summary:
      "Operational dashboards, performance reporting, data analysis.",
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    summary:
      "IT Consulting, IT Implementation, Support & Managed Services, AI & Automations",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: Settings2,
    title: "Process Management",
    summary:
      "Process execution, quality assurance, operational governance.",
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: RefreshCcw,
    title: "Recovery Support Services",
    summary:
      "Specialized operational support for recovery and repossession industry.",
    accent: "from-rose-500/20 to-pink-500/10",
  },
]

function ServiceCard({
  icon: Icon,
  title,
  summary,
  accent,
  featured = false,
}: {
  icon: typeof Boxes
  title: string
  summary: string
  accent: string
  featured?: boolean
}) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[2rem] border border-orange-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1",
        featured ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.03),transparent_35%)]" />

      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
          <Icon className="size-5" />
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-orange-500 sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
          {summary}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors group-hover:text-slate-900">
          <span>Designed for operational scale</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </article>
  )
}

export function GuestServicesSection() {
  return (
    <section id="services" className="bg-white py-8 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className=" text-xl font-semibold tracking-tight text-balance text-orange-500 sm:text-4xl lg:text-5xl">
            Services We Deliver
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-500 sm:text-lg">
            A focused service portfolio built to support operations, reporting,
            technical enablement, and recovery workflows.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <ServiceCard {...services[0]} featured />
          <ServiceCard {...services[1]} />
          <ServiceCard {...services[2]} />
          <ServiceCard {...services[3]} />
          <ServiceCard {...services[4]} />
        </div>

        <div className="mt-10 flex justify-start">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/service" className="inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
