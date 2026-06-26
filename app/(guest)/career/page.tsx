import type { Metadata } from "next"
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileUp,
  GraduationCap,
  MapPin,
  Send,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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

export default function CareerPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#062B36] pt-32 text-white sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(168,85,247,0.16),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.1),rgba(15,23,42,0.72))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
              <Sparkles className="size-4" />
              Build your next move with AS Services
            </div>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
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
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-white"
              >
                Apply Now
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#openings"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Roles
              </a>
            </div>
          </div>

          <div className="grid content-end gap-4 sm:grid-cols-2 lg:pt-12">
            {[
              { icon: UsersRound, label: "Team Culture", value: "Collaborative" },
              { icon: GraduationCap, label: "Learning", value: "Guided training" },
              { icon: BriefcaseBusiness, label: "Departments", value: "Ops, IT, Data" },
              { icon: Clock3, label: "Work Model", value: "Flexible shifts" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur"
              >
                <item.icon className="size-6 text-cyan-200" />
                <p className="mt-5 text-sm text-slate-300">{item.label}</p>
                <p className="mt-1 text-xl font-semibold text-white">
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
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Current Career Opportunities
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore active hiring areas and apply with the role that best
              matches your experience, interests, and availability.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {openings.map((job) => (
              <article
                key={job.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <BriefcaseBusiness className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {job.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {job.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
                    <Clock3 className="size-3.5" />
                    {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
                    <MapPin className="size-3.5" />
                    {job.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
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
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
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
          <aside className="rounded-2xl border border-slate-200 bg-[#062B36] p-6 text-white sm:p-8">
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
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-100">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          <form className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
                <Input
                  id="full-name"
                  name="fullName"
                  placeholder="Enter your name"
                  className="h-12 rounded-xl bg-white px-4"
                  required
                />
              </div>

              <div className="grid gap-2">
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 rounded-xl bg-white px-4"
                  required
                />
              </div>

              <div className="grid gap-2">
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  className="h-12 rounded-xl bg-white px-4"
                  required
                />
              </div>

              <div className="grid gap-2">
                <FieldLabel htmlFor="role">Preferred Role</FieldLabel>
                <select
                  id="role"
                  name="role"
                  className="h-12 w-full rounded-xl border border-input bg-white px-4 text-sm text-slate-700 outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  {openings.map((job) => (
                    <option key={job.title} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                  <option value="Other">Other suitable role</option>
                </select>
              </div>

              <div className="grid gap-2">
                <FieldLabel htmlFor="experience">Experience</FieldLabel>
                <Input
                  id="experience"
                  name="experience"
                  placeholder="Example: 2 years"
                  className="h-12 rounded-xl bg-white px-4"
                />
              </div>

              <div className="grid gap-2">
                <FieldLabel htmlFor="location">Current Location</FieldLabel>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, State"
                  className="h-12 rounded-xl bg-white px-4"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-2">
              <FieldLabel htmlFor="resume">Upload Resume</FieldLabel>
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <FileUp className="size-5 text-slate-500" />
                    <p className="text-sm text-slate-600">
                      PDF, DOC, or DOCX format preferred
                    </p>
                  </div>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="h-auto rounded-lg border-0 bg-transparent p-0 file:mr-3 file:h-9 file:rounded-full file:bg-slate-950 file:px-4 file:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-2">
              <FieldLabel htmlFor="message">Tell us about yourself</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Share your skills, availability, and the kind of work you are looking for."
                className="min-h-32 rounded-xl bg-white px-4 py-3"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">
                By applying, you confirm the information shared is accurate.
              </p>
              <Button type="submit" size="lg" className="h-12 rounded-full px-6">
                Submit Application
                <Send className="size-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
