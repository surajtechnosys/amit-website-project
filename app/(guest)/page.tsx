import { GuestHeroSection } from "@/components/guest-hero-carousel"
import { GuestGlobalDeliveryModelSection } from "@/components/guest-global-delivery-model-section"
import { GuestOperationalExcellenceSection } from "@/components/guest-operational-excellence-section"
import { GuestServicesSection } from "@/components/guest-services-section"
import { GuestTestimonialsSection } from "@/components/guest-testimonials-section"
import { GuestWhyClientsChooseUsSection } from "@/components/guest-why-clients-choose-us-section"
import { getServices } from "@/lib/actions/service-action"
import { Service } from "@/lib/types"

export default async function GuestPage() {
  const services = await getServices();

  return (
    <>
      <GuestHeroSection />
      <GuestOperationalExcellenceSection />
      <GuestServicesSection services={services as Service[]} />
      <GuestWhyClientsChooseUsSection />
      <GuestGlobalDeliveryModelSection />
      <GuestTestimonialsSection />
    </>
  )
}
