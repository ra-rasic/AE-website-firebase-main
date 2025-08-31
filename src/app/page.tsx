import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustIndicators />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Cta />
      <Contact />
    </div>
  );
}
