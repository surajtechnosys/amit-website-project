import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

import { getServiceBySlug, serviceContent } from "../service-data"

const ctaPrimaryBase =
  "inline-flex items-center gap-2 rounded-full border border-orange-300/70 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-500 hover:to-orange-500 hover:shadow-[0_16px_36px_rgba(249,115,22,0.28)]";

const ctaSecondaryBase =
  "inline-flex items-center gap-2 rounded-full border border-blue-300/70 bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-500 hover:shadow-[0_16px_36px_rgba(59,130,246,0.28)]";

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return serviceContent.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service not found | AS Services",
    }
  }

  return {
    title: `${service.title} | AS Services`,
    description: service.summary,
  }
}

function SectionCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-slate-700" />
      <p className="text-sm font-semibold uppercase tracking-[0.34em] text-slate-500">
        {title}
      </p>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="relative overflow-hidden bg-[#f6f8fb] text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.1),transparent_28%),radial-gradient(circle_at_80%_0,rgba(99,102,241,0.07),transparent_24%),linear-gradient(180deg,rgba(248,250,252,0.96)_0%,rgba(240,244,249,1)_100%)]" />

      <section className="relative pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur">
                <Icon className="size-4 text-cyan-700" />
                {service.title}
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-slate-950 sm:text-5xl lg:text-6xl">
                {service.headline}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                {service.summary}
              </p>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                {service.overview}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className={ctaPrimaryBase}
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Start a project
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={ctaSecondaryBase}
                >
                  <Link href="/services" className="inline-flex items-center gap-2">
                    Back to services
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -right-6 bottom-6 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />

              <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
                  <p className={`text-xs font-semibold uppercase tracking-[0.34em] bg-gradient-to-r ${service.accent} bg-clip-text text-transparent`}>
                    Service snapshot
                  </p>
                  <div className="mt-4 grid gap-3">
                    {service.cardPoints.slice(0, 4).map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                      >
                        <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${service.accent}`} />
                        <span className="text-sm text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <SectionCard title="Key services">
              <div className="grid gap-3">
                {service.keyServices.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Benefits">
              <div className="grid gap-3">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                  >
                    <p className="text-sm leading-6 text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-slate-500">
              Why it matters
            </p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              This service is designed to give your team more clarity, less
              operational drag, and a support model that stays dependable as
              demand grows.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
