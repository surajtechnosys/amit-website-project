import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  BoxesIcon,
  CheckCircle2,
  CheckCircle2Icon,
  CloudCog,
  FileCheck2,
  Gauge,
  Headphones,
  Icon,
  Layers3,
  LineChart,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { getServiceById } from "@/lib/actions/service-action"
import Image from "next/image"
import { Service } from "@/lib/types/index"


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const service = await getServiceById(id)

  if (!service) {
    return {
      title: "Service Not Found | AS Services",
    }
  }

  return {
    title: `${service?.data?.title} | AS Services`,
    description: service?.data?.description ?? "AS Services - Service Details",
  }
}

function ServiceVisual({ service }: { service: Service }) {

  return (
    <div className="relative min-h-[380px] lg:min-h-[480px]">
      <div
        className="absolute inset-8 rounded-full blur-3xl"
      />
      <div className="detail-orbit absolute inset-0 rounded-lg border border-white/12 bg-white/10 p-5 shadow-[0_30px_110px_rgba(0,0,0,0.25)] backdrop-blur">
        
        <Image src={service.image as string} alt={service.title} fill className="object-cover object-center rounded-lg" />
 
        {/* <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
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
        </div> */}

        {/* <div className="mt-6 grid gap-4">
          {["24/7-ready", "QA checks", "SOP-led"].map((metric, index) => (
            <div
              key={index}
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
        </div> */}

        {/* <div className="mt-6 grid grid-cols-3 gap-3">
          {["Plan", "Run", "Improve"].map((item, index) => (
            <div
              key={item}
              className="detail-node rounded-lg border border-white/10 bg-white/5 p-3 text-center"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <p className="text-xs font-semibold text-cyan-200">{item}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const service = await getServiceById(id)

  if (!service) {
    notFound()
  }


  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#062B36] pt-32 text-white sm:pt-36">

        <div className="absolute inset-0 overflow-hidden">
          {/* Background Image */}
          {service?.data?.image && (
            <div className="absolute inset-0 scale-110 blur-2xl">
              <Image
                src={service.data.image as string}
                alt="Background"
                fill
                priority
                aria-hidden="true"
                className="object-cover object-center"
              />
            </div>
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-950/60" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_20%),linear-gradient(90deg,rgba(2,6,23,0.75)_0%,rgba(2,6,23,0.45)_45%,rgba(2,6,23,0.75)_100%)]" />
        </div>


        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/service"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to services
            </Link>

            <div className="mt-7 ml-4 inline-flex items-center gap-2 rounded-full border border-orange-500 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
              <Sparkles className="size-4" />
              {service.data?.serviceCategory?.name || ""}
            </div>

            <h1 className="mt-7 text-4xl text-orange-500 font-semibold text-balance sm:text-5xl lg:text-6xl">
              {service.data?.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {service.data?.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-orange-500 px-6 text-slate-950 text-white hover:bg-orange-600"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Request Service
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Link
                href="#capabilities"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Capabilities
              </Link>
            </div>
          </div>

          <ServiceVisual service={service.data} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className={"inline-flex size-14 items-center justify-center rounded-lg border border-blue-500 text-blue-500"}>
              <BoxesIcon className="size-6" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-orange-500 sm:text-4xl">
              {service.data?.serviceBenefits?.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {service.data?.serviceBenefits?.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.data?.serviceBenefits?.items.map((outcome: any, index: number) => (
              <div
                key={outcome}
                className="detail-card rounded-lg border border-orange-200 p-5"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <CheckCircle2 className="size-5 text-emerald-500" />
                <p className="mt-4 text-sm leading-6 text-blue-700">
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
              <p className={"inline-flex rounded-full border border-blue-500 text-blue-500 px-3 py-1 text-xs font-semibold uppercase"}>
                Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-orange-500 sm:text-4xl">
                {service.data?.capabilities?.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {service.data?.capabilities?.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start">
              {service.data?.capabilities?.items.map((capability: any, index: number) => (
                <div
                  key={capability}
                  className="detail-card rounded-lg border border-orange-200 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.05)]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <FileCheck2 className="size-5 text-cyan-700" />
                  <p className="mt-4 text-sm font-semibold leading-6 text-blue-800">
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
          <div className="rounded-lg border border-orange-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-8">
            <Layers3 className="size-9 text-cyan-700" />
            <h2 className="mt-5 text-3xl font-semibold text-orange-500">
              Delivery Process
            </h2>
            <div className="mt-8 grid gap-4">
              {service.data?.deliveryProcess?.items.map((step: any, index: number) => (
                <div key={step} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
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
            <div className={"absolute inset-x-0 top-0 h-1 bg-gradient-to-r"} />
            <div className="relative">
              <Target className="size-9 text-cyan-200" />
              <h2 className="mt-5 text-3xl font-semibold">
                {service.data?.outcomeFocuses?.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {service.data?.outcomeFocuses?.description}
              </p>
              <div className="mt-8 grid gap-3">
                {service.data?.outcomeFocuses?.items.map((outcome: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2Icon className="size-5 text-cyan-200" />
                    <span className="text-sm font-medium text-slate-100">
                      {outcome}
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
                  {service.data?.contactSection?.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  {service.data?.contactSection?.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="default" className="h-12 rounded-full px-6 border border-orange-500 bg-orange-500 text-slate-950 text-white hover:bg-orange-600">
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="default" className="h-12 rounded-full px-6 border border-blue-500 bg-white text-blue-500 hover:bg-blue-600 hover:text-white">
                  <Link href="/service">All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
