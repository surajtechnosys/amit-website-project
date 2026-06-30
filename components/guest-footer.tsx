import Image from "next/image"
import Link from "next/link"
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

import logo from "../images/AS-Services-Logo.jpg"

const serviceLinks = [
  { label: "Business Process Outsourcing", href: "#services" },
  { label: "Data Analytics & Dashboards", href: "#services" },
  { label: "Technical Support & Services", href: "#services" },
]

const aboutLinks = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Home", href: "/" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
  { label: "X", href: "https://x.com", icon: FaXTwitter },
]

export function GuestFooter() {
  return (
    <footer className="bg-black text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <Image
                src={logo}
                alt="AS Services logo"
                width={180}
                height={60}
                className="h-auto w-[120px] object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Intelligent services powered by technology, data, and talent to help your business
              operate smoothly, scale confidently, and stay responsive.
            </p>

            <a
              href="tel:+91-9212174507"
              className="mt-6 inline-flex text-xl font-medium tracking-tight text-white transition hover:text-cyan-200"
            >
              +91-9212174507
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-orange-400 hover:bg-orange-500 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-orange-500">Services</p>
            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-orange-500">About Us</p>
            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              {aboutLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-orange-500">Newsletter</p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Get occasional updates on service improvements, analytics insights, and practical
              business tips.
            </p>
            <form className="mt-5 grid gap-3">
              <label className="sr-only" htmlFor="footer-newsletter-email">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-full border border-blue-500 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-blue-500"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-semibold text-white transition cursor-pointer hover:bg-orange-600"
              >
                Subscribe
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
          <a
            href="mailto:info@asservices.com"
            className="inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
          >
            <Mail className="size-4 text-cyan-300" />
            info@asservices.com
          </a>
          <a
            href="tel:+910000000000"
            className="inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
          >
            <Phone className="size-4 text-cyan-300" />
            +91-9212174507
          </a>
          <div className="inline-flex items-start gap-3 text-sm text-slate-300">
            <MapPin className="mt-0.5 size-4 text-cyan-300" />
            <span>Flexible delivery across time zones with responsive support.</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} AS Services. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {socialLinks.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
                >
                  <Icon className="size-4" />
                  <span>{social.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
