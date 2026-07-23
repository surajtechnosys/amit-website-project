import type { Metadata } from "next"
import Image from "next/image"
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  UsersRound,
} from "lucide-react"

import herobanner2 from "@/images/herobanner2.jpg"
import { getJobs } from "@/lib/actions/job-action"
import CareerForm from "@/components/career/career-form"
import { Job } from "@/lib/types"


export const metadata: Metadata = {
  title: "Careers | AS Services",
  description:
    "Apply for operations, analytics, technical support, and IT services roles at AS Services.",
}

const openings = [
  {
    title: "Back Office Executive",
    type: "Full time",
    location: "Remote / Hybrid",
    summary:
      "Support documentation, workflow tracking, client coordination, and quality-focused processing.",
  },
  {
    title: "Technical Support Associate",
    type: "Full time",
    location: "Flexible shift",
    summary:
      "Help users resolve technical issues, follow service processes, and maintain clear communication.",
  },
  {
    title: "Data Analyst Trainee",
    type: "Entry level",
    location: "Remote friendly",
    summary:
      "Assist with reports, dashboards, data cleanup, and operational insights for growing teams.",
  },
]

const benefits = [
  "Structured training and mentor support",
  "Career paths across operations, analytics, and IT",
  "Process-driven work with global client exposure",
  "Collaborative teams with practical learning",
]

const steps = [
  "Submit your profile",
  "Resume screening",
  "Role discussion",
  "Skill assessment",
  "Offer and onboarding",
]

function FieldLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode
  htmlFor: string
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-slate-800">
      {children}
    </label>
  )
}

export default async function CareerPage() {
  const jobs = await getJobs()

  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-black/90 pt-32 text-white sm:pt-36">
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
      
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-blue-500 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-500  hover:bg-blue-500 hover:text-white">
              <Sparkles className="size-4" />
              Build your next move with AS Services
            </div> */}

            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-balance text-orange-500 sm:text-5xl lg:text-6xl">
              Advance your career in operations, analytics, and IT services.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Join a delivery team that values ownership, steady learning, and
              practical problem solving. Share your profile and our hiring team
              will match your skills with the right opportunity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 px-6 text-sm font-semibold transition"
              >
                Apply Now
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#openings"
                className="inline-flex h-12 items-center justify-center rounded-full border border-orange-500 px-6 text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                View Roles
              </a>
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2">
            {[
              { icon: UsersRound, label: "Team Culture", value: "Collaborative" },
              { icon: GraduationCap, label: "Learning", value: "Guided training" },
              { icon: BriefcaseBusiness, label: "Departments", value: "Ops, IT, Data" },
              { icon: Clock3, label: "Work Model", value: "Flexible shifts" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-blue-500 bg-white/10 p-5 backdrop-blur"
              >
                <item.icon className="size-6 text-orange-200" />
                <p className="mt-5 text-sm text-slate-300">{item.label}</p>
                <p className="mt-1 text-xl font-semibold text-orange-500">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-orange-500 sm:text-4xl">
              Current Career Opportunities
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore active hiring areas and apply with the role that best
              matches your experience, interests, and availability.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {jobs.length > 0  && jobs.map((job: any) => (
              <article
                key={job.title}
                className="rounded-2xl border border-blue-500 bg-slate-50 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-500 text-white">
                  <BriefcaseBusiness className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-orange-500">
                  {job.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {job.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-600 bg-white px-3 py-1.5 text-xs font-semibold text-blue-600">
                    <Clock3 className="size-3.5" />
                    {job.employmentType?.replace("_", " ")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-600 bg-white px-3 py-1.5 text-xs font-semibold text-blue-600">
                    <MapPin className="size-3.5" />
                    {job.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-orange-500 sm:text-4xl">
              Why candidates choose us
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We look for reliable, curious people who want to grow through
              real delivery work and clear standards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-orange-200 bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                <p className="text-sm leading-6 text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <aside className="rounded-2xl border border-slate-200 bg-blue-800 p-6 text-white sm:p-8">
            <BadgeCheck className="size-10 text-cyan-200" />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight">
              Candidate Application
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Fill out the form with your details, preferred role, and resume.
              Our recruitment team will review your profile and contact you for
              the next step.
            </p>

            <div className="mt-8 grid gap-3">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-orange-300 text-xs font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-100">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          <CareerForm jobs={jobs as Job[]} />
        </div>
      </section>
    </div>
  )
}
