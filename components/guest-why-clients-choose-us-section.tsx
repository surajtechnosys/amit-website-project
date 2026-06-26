import { BarChart3, Globe2, ShieldCheck, Workflow } from "lucide-react"

const reasons = [
  {
    icon: Globe2,
    title: "Scalable Teams",
    summary: "Flexible delivery capacity that grows with your needs.",
  },
  {
    icon: ShieldCheck,
    title: "Cost Effective Delivery",
    summary: "Lean operations with a clear focus on value and efficiency.",
  },
  {
    icon: Workflow,
    title: "Structured Processes",
    summary: "Consistent execution built around repeatable workflows.",
  },
  {
    icon: BarChart3,
    title: "Management Visibility & Reporting",
    summary: "Clear reporting and oversight across daily operations.",
  },
]

function ReasonCard({
  icon: Icon,
  title,
  summary,
}: {
  icon: typeof Globe2
  title: string
  summary: string
}) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-orange-200 bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06),transparent_35%)]" />

      <div className="relative">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_12px_24px_rgba(15,23,42,0.12)]">
          <Icon className="size-5" />
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
      </div>
    </article>
  )
}

export function GuestWhyClientsChooseUsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8fafc] py-16 text-slate-900 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.07),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.07),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-blue-500">
            Why Clients Choose Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-orange-500 sm:text-4xl lg:text-5xl">
            Built to scale with clarity, control, and confidence.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Our delivery model gives clients flexible teams, disciplined process,
            and visibility that makes operations easier to manage.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <ReasonCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              summary={reason.summary}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
