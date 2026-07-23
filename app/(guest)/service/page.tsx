import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Gauge,
  LineChart,
  Settings2,
  ShieldCheck,
} from "lucide-react"
import herobanner2 from "@/images/herobanner2.jpg"


import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getServices } from "@/lib/actions/service-action"
import { getServiceCategory } from "@/lib/actions/service-category-action"
import { getSettings } from "@/lib/actions/settings-action"
import ServiceTab from "./service-tab"

export const metadata: Metadata = {
  title: "Services | AS Services",
  description:
    "Explore AS Services capabilities across back office operations, analytics, technical support, IT consulting, managed services, and recovery support.",
}

type DeliveryCard = {
  title: string;
  summary: string;
};

type ServiceItem = {
  id: string;
  title: string;
  status: string;
};

const deliveryIcons = [ShieldCheck, Gauge, Settings2, LineChart];

function parseDeliveryCards(
  value: string | null | undefined,
  fallback: DeliveryCard[],
) {
  if (!value) return fallback;

  const trimmed = value.trim();
  if (!trimmed) return fallback;

  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) {
      return parsed
        .map((item) => ({
          title: String(item?.title ?? "").trim(),
          summary: String(item?.summary ?? item?.content ?? "").trim(),
        }))
        .filter((item) => item.title || item.summary);
    }
  } catch {
    // fall through to fallback values
  }

  return fallback;
}


export default async function ServicePage() {
  const settings = await getSettings();
  const services = await getServices();
  const serviceCategories = await getServiceCategory();
  const featuredServices = services as ServiceItem[];
  const deliveryCards = parseDeliveryCards(settings?.serviceDeliveryCards, [
    {
      title: "Quality Controls",
      summary:
        "Defined checks, documented processes, and review loops for consistent delivery.",
    },
    {
      title: "Scalable Teams",
      summary:
        "Flexible delivery capacity that can expand with your workload and priorities.",
    },
    {
      title: "Process Discipline",
      summary:
        "Clear ownership, practical SOPs, and measurable operational routines.",
    },
    {
      title: "Visible Outcomes",
      summary:
        "Dashboards and reporting that make performance easier to monitor and improve.",
    },
  ]);

  const heroTitle =
    settings?.serviceHeroTitle ??
    "Services built for scale, support, and smarter delivery.";
  const heroDescription =
    settings?.serviceHeroDescription ??
    "AS Services combines operations, analytics, IT support, and consulting into one focused delivery model, helping teams move faster with dependable execution and visible outcomes.";
  const deliveryTagline =
    settings?.serviceDeliveryTagline ?? "Delivery Method";
  const deliveryTitle =
    settings?.serviceDeliveryTitle ??
    "Advanced support, grounded in operational discipline.";
  const deliveryDescription =
    settings?.serviceDeliveryDescription ??
    "We keep the model simple for your team: define the workflow, assign ownership, measure the output, and improve the process.";

  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#062B36] pt-32 text-white sm:pt-36">
        <div className="absolute inset-0">
          <Image
            src={"/api" + herobanner2}
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/78" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_32%),linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.72)_44%,rgba(2,6,23,0.85)_100%)]" />
        </div>


        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">

            <h1 className="mt-7 text-4xl font-semibold text-orange-500 text-balance sm:text-5xl lg:text-6xl">
              {heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-full bg-orange-500  px-6 text-white hover:bg-orange-600">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Discuss a Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Link
                href="#services-list"
                className="inline-flex h-12 items-center justify-center rounded-full border border-blue-500 px-6 text-sm font-semibold text-blue-500 transition hover:bg-blue-500 hover:text-white"
              >
                Explore Services
              </Link>
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
                {featuredServices.length > 0 && featuredServices.slice(0,3).map(
                  (service, index: number) => (
                    <div
                      key={service.id}
                      className="service-meter rounded-lg border border-white/10 bg-slate-950/35 p-4"
                      style={{ animationDelay: `${index * 180}ms` }}
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-white">{service.title}</span>
                        <span className="text-cyan-200">{service.status}</span>
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
            <p className="text-sm font-semibold uppercase text-blue-500">
              Complete Service List
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-orange-500 sm:text-4xl">
              Choose the support your team needs next.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each service is designed to plug into real business workflows,
              improve delivery discipline, and give leadership clearer visibility.
            </p>
          </div>

          <ServiceTab serviceCategories={serviceCategories} services={services} />

        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-500">
              {deliveryTagline}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-orange-500 sm:text-4xl">
              {deliveryTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {deliveryDescription}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {deliveryCards.map((point, index) => {
              const Icon = deliveryIcons[index % deliveryIcons.length]

              return (
                <div
                  key={point.title}
                  className="service-step rounded-lg border border-orange-200 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.05)]"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <Icon className="size-7 text-cyan-700" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {point.summary}
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
    </div>
  )
}
