"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../images/AS-Services-Logo.jpg";
import { GuestEnquiryPopup } from "@/components/guest-enquiry-popup";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
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

const navLinkBase =
  "relative pb-1 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 hover:text-orange-500";

const navTriggerBase =
  "relative pb-1 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 hover:text-orange-500 hover:!bg-transparent focus:!bg-transparent data-open:!bg-transparent data-popup-open:!bg-transparent";

const ctaPrimaryBase =
  "inline-flex items-center rounded-full border border-orange-300/70 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-500 hover:to-orange-500 hover:shadow-[0_16px_36px_rgba(249,115,22,0.28)]";

const ctaSecondaryBase =
  "inline-flex items-center gap-2 rounded-full border border-blue-300/70 bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-500 hover:shadow-[0_16px_36px_rgba(59,130,246,0.28)]";

export function GuestNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isTransparentHeader = isHomePage && !scrolled;

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isTransparentHeader
          ? "border-transparent bg-transparent text-white"
          : "border-slate-200/80 bg-white/92 text-slate-900 shadow-sm shadow-slate-900/5 backdrop-blur-xl",
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

        <nav className="flex items-center gap-6">
          <button
            type="button"
            className={[
              "inline-flex h-8 w-8 items-center justify-center rounded-xl border transition md:hidden",
              isTransparentHeader
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-slate-200 text-slate-700 hover:bg-slate-100",
            ].join(" ")}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="guest-navbar-menu"
            onClick={() => {
              setMobileOpen((open) => {
                const next = !open;
                if (!next) setMobileServicesOpen(false);
                return next;
              });
            }}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <div className="hidden items-center gap-4 md:flex">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-5">
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className={[
                      navLinkBase,
                      isTransparentHeader ? "text-white" : "text-slate-700",
                    ].join(" ")}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className={[
                      navLinkBase,
                      isTransparentHeader ? "text-white" : "text-slate-700",
                    ].join(" ")}
                  >
                    About us
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/career"
                    className={[
                      navLinkBase,
                      isTransparentHeader ? "text-white" : "text-slate-700",
                    ].join(" ")}
                  >
                    Careers
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="ml-1">
                  <NavigationMenuTrigger
                    className={[
                      navTriggerBase,
                      isTransparentHeader ? "text-white" : "text-slate-700",
                    ].join(" ")}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="overflow-hidden rounded-[14px] border border-slate-200 bg-white p-0 text-slate-950 shadow-xl shadow-slate-950/10 md:min-w-[260px] md:max-w-[280px]">
                    <div className="grid gap-0">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="group block w-full px-4 py-3 text-black transition-colors duration-200 hover:bg-orange-500 hover:text-white"
                        >
                          <p className="text-sm font-semibold text-current transition-colors">
                            {service.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="ml-2">
                  <Link href="/contact" className={ctaPrimaryBase}>
                    Get in Touch
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="ml-2">
                  <GuestEnquiryPopup
                    triggerClassName={ctaSecondaryBase}
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
          className={[
            "border-t md:hidden",
            isTransparentHeader
              ? "border-white/15 bg-slate-950/90 text-white backdrop-blur-xl"
              : "border-slate-200 bg-white text-slate-900",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="grid gap-3">
              <Link
                href="/"
                className="rounded-2xl px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-2xl px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                About us
              </Link>
              <div className="overflow-hidden rounded-2xl">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left transition hover:bg-slate-50"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-panel"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  <span className="text-sm font-medium text-slate-700">
                    Services
                  </span>
                  <ChevronDown
                    className={[
                      "size-4 shrink-0 text-slate-400 transition-transform duration-200",
                      mobileServicesOpen ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                  />
                </button>

                <div
                  id="mobile-services-panel"
                  className={[
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="min-h-0">
                    <div className="grid gap-1 pb-1 pl-3 pr-1">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="group rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          <span className="block text-[15px] leading-6">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/career"
                className="rounded-2xl px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className={ctaPrimaryBase + " justify-center"}
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Contact us
              </Link>
              <GuestEnquiryPopup
                triggerClassName={ctaSecondaryBase + " w-full justify-center"}
                triggerLabel="Enquiry Us"
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
