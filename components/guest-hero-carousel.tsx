"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

const heroVideoSrc = new URL("../images/hero1.mp4", import.meta.url).toString()

const trustMetrics = [
  { label: "Team Members", value: 100, suffix: "+" },
  { label: "Happy Customers", value: 20, suffix: "+" },
  { label: "Operational Support", value: 24, suffix: "x7" },
]

const trustTags = ["US Client Delivery Experience", "Process-Driven Operations"]

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number
  suffix: string
  active: boolean
}) {
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    if (!active) return

    let frame = 0
    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(value * eased)

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [active, value])

  const formatted = active
    ? value % 1 === 0
      ? Math.round(displayValue).toString()
      : displayValue.toFixed(2)
    : value % 1 === 0
      ? "0"
      : "0.00"

  return (
    <span className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  )
}

export function GuestHeroSection() {
  const [metricsVisible, setMetricsVisible] = React.useState(false)
  const metricsRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const node = metricsRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setMetricsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

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
                Global delivery from India
              </p>

              <h1 className="mt-5 max-w-2xl text-4xl text-orange-500 font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[3.15rem]">
                Global Business Support Services Delivered from India
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-xl">
                Helping organizations scale through offshore back-office operations,
                recovery support services, reporting, analytics, IT Services and
                operational excellence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-orange-500 text-white px-6 shadow-none hover:bg-orange-600"
                >
                  <Link href="#services" className="inline-flex items-center gap-2">
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
                  <Link href="/contact" className="inline-flex items-center gap-2">
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
                      key={metric.label}
                      className="rounded-2xl border border-blue-500 bg-white/8 px-4 py-4 backdrop-blur"
                    >
                      <div className="text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
                        <AnimatedCounter
                          value={metric.value}
                          suffix={metric.suffix}
                          active={metricsVisible}
                        />
                      </div>
                      <p className="mt-1 text-sm font-medium text-orange-500">
                        {metric.label}
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
              <div className="absolute" />
              <div className="relative rounded-[2.25rem] border border-white/12 bg-slate-950/35 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-md">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
                    Trusted delivery
                  </p>
                  <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-white">
                    A focused operations partner built for scale, consistency, and speed.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {[
                      "Back-office operations",
                      "Reporting and analytics",
                      "Recovery and support services",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/78"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
