"use client";

import Image, { type StaticImageData } from "next/image";
import { Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import outsourcingImage from "../images/outsourcing.jpg";
import analyticsImage from "../images/analatics.jpg";
import technologyImage from "../images/technology.jpg";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: StaticImageData;
  label: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Their transition team helped us go live with far less friction than we expected. The handoff was structured, the communication was clear, and the team felt dependable from day one.",
    name: "Aarav Mehta",
    title: "Operations Director",
    company: "Northstar Logistics",
    image: outsourcingImage,
    label: "Operational Delivery",
  },
  {
    quote:
      "We finally had reporting that was easy to act on. The dashboards, cadence, and visibility made it easier for leadership to make faster decisions with confidence.",
    name: "Maya Shah",
    title: "VP, Business Operations",
    company: "Vertex Analytics",
    image: analyticsImage,
    label: "Analytics & Reporting",
  },
  {
    quote:
      "Support and technical coordination became much smoother after the team stepped in. They brought process discipline without making the engagement feel heavy.",
    name: "Daniel Lee",
    title: "Program Lead",
    company: "Summit Recovery Services",
    image: technologyImage,
    label: "Support Services",
  },
  {
    quote:
      "Their project management approach ensured every milestone was delivered on time. Communication remained transparent throughout the engagement.",
    name: "Sophia Wilson",
    title: "Project Manager",
    company: "BrightEdge Technologies",
    image: outsourcingImage,
    label: "Project Management",
  },
  {
    quote:
      "The team quickly understood our business requirements and delivered scalable solutions that significantly improved our operational efficiency.",
    name: "James Anderson",
    title: "CTO",
    company: "InnovateX Solutions",
    image: analyticsImage,
    label: "Technology Solutions",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[2px] border-orange-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={testimonial.image}
          alt={testimonial.label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-orange-500 bg-orange-500 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {testimonial.label}
        </div>
      </div>

      <div className="p-6">
        <Quote className="h-6 w-6 text-slate-300" />

        <p className="mt-4 text-[15px] leading-7 text-slate-700">
          {testimonial.quote}
        </p>

        <div className="mt-6 border-t border-orange-200 pt-4">
          <p className="text-sm font-semibold text-slate-950">{testimonial.name}</p>
          <p className="text-sm text-slate-600">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export function GuestTestimonialsSection() {
  return (
    <section className="bg-violet-100 py-16 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-blue-500">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-orange-500 sm:text-4xl lg:text-5xl">
            What clients say about working with us.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A few concise reflections on transition quality, reporting clarity,
            and the consistency of our operational support.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={24}
            speed={1200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="pb-4">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}