"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceTab({ serviceCategories, services }: any) {
    const [activeCategory, setActiveCategory] = useState(
        serviceCategories.length > 0 ? serviceCategories[0].id : 0
    );

    const selectedCategory = serviceCategories.find(
        (category: any) => category.id === activeCategory
    );

    const selectedServices = services.filter((service: any) => service.categoryId === activeCategory)

    return (
        <section className="py-20">
            <div className="container">


                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Sidebar */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-24 rounded-2xl border bg-card p-4">
                            <h3 className="mb-4 text-lg font-semibold">
                                Service Categories
                            </h3>

                            <div className="space-y-2">
                                {serviceCategories.map((category: any) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={cn(
                                            "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-300",
                                            activeCategory === category.id
                                                ? "bg-orange-500 text-primary-foreground shadow"
                                                : "hover:bg-muted"
                                        )}
                                    >
                                        <span>{category.name}</span>

                                        <span className="rounded-full bg-white/20 px-2 py-1 text-xs">
                                            {selectedServices.length}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Services */}
                    <div className="lg:col-span-9">
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <h3 className="text-3xl font-bold">
                                    {selectedCategory?.name}
                                </h3>

                                <p className="mt-2 text-muted-foreground">
                                    {selectedServices.length} Services Available
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {selectedServices.map((service: any, index: number) => (
                                <article
                                    id={service.id}
                                    key={service.title}
                                    className="service-card group relative overflow-hidden rounded-lg border border-orange-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)]"
                                    style={{ animationDelay: `${index * 90}ms` }}
                                >
                                    <div className="absolute inset-x-0 top-0 h-1 service-shine" />

                                    <h3 className="mt-5 text-xl font-semibold text-orange-500">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {service.shortDescription}
                                    </p>

                                    <div className="mt-6 grid gap-3">
                                        {service.serviceBenefits?.items.map((feature: any) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/service/${service.id}`}
                                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition group-hover:text-cyan-700"
                                    >
                                        View service details
                                        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}