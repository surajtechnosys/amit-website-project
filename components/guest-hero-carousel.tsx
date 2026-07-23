"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const heroVideoSrc = new URL("../images/hero1.mp4", import.meta.url).toString();

const heroSlides = [
  {
    src: new URL("../images/hero1.jpg", import.meta.url).toString(),
    alt: "Team collaboration and operational support",
    title: "Operational consistency",
    description:
      "Structured back-office support that helps teams stay organized and move faster.",
  },
  {
    src: new URL("../images/hero2.jpg", import.meta.url).toString(),
    alt: "Business support and analytics",
    title: "Reporting with clarity",
    description:
      "Simple, practical reporting that turns daily activity into useful decision-making insight.",
  },
  {
    src: new URL("../images/hero3.jpg", import.meta.url).toString(),
    alt: "Recovery and support services",
    title: "Reliable recovery support",
    description:
      "Responsive service coverage designed to keep operations steady when things change.",
  },
];

type MetricItem = {
  key: string;
  value: number;
};

const metricFallbacks: MetricItem[] = [
  { key: "Team Members", value: 48 },
  { key: "Happy Customers", value: 120 },
  { key: "Operational Support", value: 24 },
];

function parseMetricList(
  value: string | null | undefined,
  fallback: MetricItem[],
) {
  if (!value) return fallback;

  const trimmed = value.trim();
  if (!trimmed) return fallback;

  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) {
      return parsed
        .map((item) => ({
          key: String(item?.key ?? item?.title ?? item?.label ?? "").trim(),
          value: Number(item?.value ?? item?.number ?? 0),
        }))
        .filter((item) => item.key && Number.isFinite(item.value));
    }
  } catch {
    // fall through
  }

  return fallback;
}

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number | string;
  suffix: string;
  active: boolean;
}) {
  const [displayValue, setDisplayValue] = React.useState(0);

  const numericValue = typeof value === "number" ? value : Number(value);

  React.useEffect(() => {
    if (!active || Number.isNaN(numericValue)) return;

    let frame = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(numericValue * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [active, numericValue]);

  const formatted =
    numericValue % 1 === 0
      ? Math.round(displayValue).toString()
      : displayValue.toFixed(2);

  return (
    <span className="tabular-nums">
      {Number.isNaN(numericValue) ? value : formatted}
      {suffix}
    </span>
  );
}

type HeroSettings = {
  tagline?: string | null;
  legalName?: string | null;
  description?: string | null;
  heroTrustTags?: string | null;
};

type BannerItem = {
  id: string;
  image: string;
  tagline: string;
  description: string;
  status: string;
};

export function GuestHeroSection({
  settings,
  banners,
}: {
  settings?: HeroSettings;
  banners: BannerItem[];
}) {
  const [metricsVisible, setMetricsVisible] = React.useState(false);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const metricsRef = React.useRef<HTMLDivElement | null>(null);
  const heroTagline = settings?.tagline ?? "Global delivery from India";
  const heroTitle =
    settings?.legalName ?? "Global Business Support Services Delivered from India";
  const heroDescription =
    settings?.description ??
    "Helping organizations scale through offshore back-office operations, recovery support services, reporting, analytics, IT Services and operational excellence.";
  const trustMetrics = parseMetricList(settings?.heroTrustTags, metricFallbacks);
  const trustTags = [
    "US Client Delivery Experience",
    "Process-Driven Operations",
  ];

  React.useEffect(() => {
    const node = metricsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setMetricsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="relative min-h-[100svh] overflow-hidden bg-slate-950">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/30 to-slate-950/85" />

        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/65">
                {heroTagline}
              </p>

              <h1 className="mt-5 max-w-2xl text-4xl text-orange-500 font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[3.15rem]">
                {heroTitle}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-xl">
                {heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-orange-500 text-white px-6 shadow-none hover:bg-orange-600"
                >
                  <Link
                    href="/service"
                    className="inline-flex items-center gap-2"
                  >
                    Explore Services
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-500 bg-transparent px-6 text-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <Link
                    href="/career"
                    className="inline-flex items-center gap-2"
                  >
                    Join Our Team
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>

              <div ref={metricsRef} className="mt-10 max-w-3xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                  Trust Metrics
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {trustMetrics.map((metric) => (
                    <div
                      key={metric.key}
                      className="rounded-2xl border border-blue-500 bg-white/8 px-4 py-4 backdrop-blur"
                    >
                      <div className="text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
                        <AnimatedCounter
                          value={metric.value}
                          suffix=""
                          active={metricsVisible}
                        />
                      </div>
                      <p className="mt-1 text-sm font-medium text-orange-500">
                        {metric.key}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {trustTags.map((tag) => (
                  <div
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-500 bg-white/8 px-4 py-2 text-sm text-white/78 backdrop-blur"
                  >
                    <CheckCircle2 className="size-4 text-emerald-300" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -left-8 top-8 h-20 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute -right-10 bottom-8 h-20 w-36 rounded-full bg-orange-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/12 bg-slate-950/40 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-md">
                <div className="relative aspect-[4/4.35] min-h-[26rem]">
                  {banners
                    .filter((banner: BannerItem) => banner.status.toLowerCase() === "active")
                    .map((banner: BannerItem, index: number) => (
                      <div
                        key={banner.id}
                        className={[
                          "absolute inset-0 transition-all duration-700",
                          index === activeSlide
                            ? "translate-x-0 opacity-100"
                            : index < activeSlide
                              ? "-translate-x-full opacity-0"
                              : "translate-x-full opacity-0",
                        ].join(" ")}
                      >
                        <Image
                          src={"/api" + banner.image}
                          alt={banner.tagline}
                          fill
                          sizes="100vw"
                          priority={index === 0}
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <div className="rounded-[1.4rem] border border-white/12 bg-black/35 p-5 backdrop-blur-md">
                            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
                              Featured service view
                            </p>
                            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                              {banner.tagline}
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-white/78">
                              {banner.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2 px-4">
                  {banners.filter((banner: BannerItem) => banner.status.toLowerCase() === "active").map((banner: BannerItem, index: number) => (
                    <button
                      key={banner.id}
                      type="button"
                      aria-label={`Show slide ${index + 1}: ${banner.tagline}`}
                      className={[
                        "h-2.5 rounded-full transition-all duration-300",
                        index === activeSlide
                          ? "w-8 bg-white"
                          : "w-2.5 bg-white/45 hover:bg-white/70",
                      ].join(" ")}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






