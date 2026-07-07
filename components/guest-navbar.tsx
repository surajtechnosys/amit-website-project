"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "../images/AS-Services-Logo.jpg";
import { GuestEnquiryPopup } from "@/components/guest-enquiry-popup";
import { getServices } from "@/lib/actions/service-action"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";


const navLinkBase =
  "relative pb-1 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 hover:text-orange-500";

const ctaPrimaryBase =
  "inline-flex items-center rounded-full border border-orange-300/70 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-500 hover:to-orange-500 hover:shadow-[0_16px_36px_rgba(249,115,22,0.28)]";

const ctaSecondaryBase =
  "inline-flex items-center gap-2 rounded-full border border-blue-300/70 bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-500 hover:shadow-[0_16px_36px_rgba(59,130,246,0.28)]";

const dropdownLinkBase =
  "block rounded-2xl border border-slate-200/80 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_14px_35px_rgba(15,23,42,0.08)]";

export function GuestNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isTransparentHeader = isHomePage && !scrolled;
  const [services, setServices] = useState([])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    getServices().then((res: any) => {

      setServices(res)
    })

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
                <NavigationMenuItem>
                  <div className="group/services">
                    <Link
                      href="/service"
                      className={[
                        navLinkBase,
                        "flex items-center gap-2 mt-1",
                        isTransparentHeader ? "text-white" : "text-slate-700",
                      ].join(" ")}
                    >
                      Services
                      <span className="text-[0.7rem] font-normal opacity-70 transition group-hover/services:rotate-180">
                        ▼
                      </span>
                    </Link>

                    <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[34rem] -translate-x-1/2 translate-y-2 rounded-[1.5rem] border border-slate-200 bg-white p-4 opacity-0 shadow-[0_24px_70px_rgba(15,23,42,0.14)] transition-all duration-200 group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100 group-focus-within/services:visible group-focus-within/services:translate-y-0 group-focus-within/services:opacity-100">
                      <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-950">
                            Explore services
                          </p>
                         
                        </div>
                        <Link
                          href="/service"
                          className="rounded-full bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-orange-600"
                        >
                          View all
                        </Link>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        {services.slice(0, 4).map((item: any, index: number) => (
                          <Link 
                            key={item.id} 
                            href={ "/service/" + item.id} 
                            className={dropdownLinkBase}  
                            onClick={(e) => {
                              (e.currentTarget as HTMLAnchorElement).blur();
                            }}>
                            <p className="text-sm font-semibold text-slate-950">
                              {item.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
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
              }}
            >
              Home
              </Link>
              <Link
                href="/about"
              className="rounded-2xl px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              onClick={() => {
                setMobileOpen(false);
              }}
            >
              About us
              </Link>
              <Link
                href="/service"
                className="rounded-2xl px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                Services
              </Link>
              <Link
                href="/career"
              className="rounded-2xl px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              onClick={() => {
                setMobileOpen(false);
              }}
            >
              Careers
              </Link>
              <Link
                href="/contact"
              className={ctaPrimaryBase + " justify-center"}
              onClick={() => {
                setMobileOpen(false);
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
