"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "../images/AS-Services-Logo.jpg";
import { GuestEnquiryPopup } from "@/components/guest-enquiry-popup";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "Support Services",
    href: "/service#technical-support",
    description: "Help desk, incident response and technical support.",
  },
  {
    title: "Data Analytics & Dashboards",
    href: "/service#analytics",
    description: "Business intelligence and dashboard reporting.",
  },
  {
    title: "IT Consulting Services",
    href: "/service#consulting",
    description: "Strategy, planning, and technical advisory.",
  },
  {
    title: "Technical Support Services",
    href: "/service#technical-support",
    description: "Ongoing system maintenance and support.",
  },
  {
    title: "IT Managed Services",
    href: "/service#managed-services",
    description: "Managed infrastructure and cloud operations.",
  },
];

export function GuestNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-slate-200 bg-white text-slate-900 shadow-sm shadow-slate-900/5 backdrop-blur"
          : "border-transparent bg-transparent text-white",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex h-20 shrink-0 items-center rounded-xl px-2"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={logo}
            alt="AS Services logo"
            width={180}
            height={36}
            priority
            className="block h-15 w-auto object-contain sm:h-14 lg:h-16"
          />
        </Link>

        <nav className="flex items-center gap-3">
          <button
            type="button"
            className={[
              "inline-flex h-8 w-8 items-center justify-center rounded-xl border transition md:hidden",
              scrolled
                ? "border-slate-200 text-slate-700 hover:bg-slate-100"
                : "border-white/20 text-white hover:bg-white/10",
            ].join(" ")}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="guest-navbar-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>

          <div className="hidden items-center gap-4 md:flex">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className={[
                      "text-sm font-semibold transition-colors",
                      scrolled
                        ? "text-slate-700 hover:text-slate-950"
                        : "text-white hover:text-black/80",
                    ].join(" ")}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about"
                    className={[
                      "text-sm font-semibold transition-colors",
                      scrolled
                        ? "text-slate-700 hover:text-slate-950"
                        : "text-white hover:text-black/80",
                    ].join(" ")}
                  >
                    About us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/career"
                    className={[
                      "text-sm font-semibold transition-colors",
                      scrolled
                        ? "text-slate-700 hover:text-slate-950"
                        : "text-white hover:text-black/80",
                    ].join(" ")}
                  >
                    Careers
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={[
                      "text-sm font-semibold transition-colors",
                      scrolled
                        ? "text-slate-700 hover:text-slate-950"
                        : "text-white hover:text-black/80",
                    ].join(" ")}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-[14px] border border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-950/10 md:min-w-[320px]">
                    <div className="grid gap-2 p-4">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="block rounded-xl p-3 transition hover:bg-slate-100"
                        >
                          <p className="text-sm font-semibold">
                            {service.title}
                          </p>
                          <p className="mt-1 text-sm text-slate-600">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-violet-500/20 transition hover:bg-violet-400"
                  >
                    Get in Touch
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <GuestEnquiryPopup
                    triggerClassName="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm shadow-cyan-500/20 transition hover:bg-white"
                    triggerLabel="Enquiry Us"
                  />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
      </div>

      {mobileOpen ? (
        <div
          id="guest-navbar-menu"
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="grid gap-2">
              <Link
                href="/"
                className="rounded-xl px-3 py-2 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-xl px-3 py-2 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={() => setMobileOpen(false)}
              >
                About us
              </Link>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2">
                <p className="px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Services
                </p>
                <div className="grid gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="rounded-xl px-3 py-2 text-base text-slate-700 transition hover:bg-white hover:text-slate-950"
                      onClick={() => setMobileOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/career"
                className="rounded-xl px-3 py-2 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={() => setMobileOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="rounded-xl px-3 py-2 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={() => setMobileOpen(false)}
              >
                Contact us
              </Link>
              <GuestEnquiryPopup
                triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 py-3 text-base font-semibold text-white transition hover:bg-cyan-700"
                triggerLabel="Enquiry Us"
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
