
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustIndicators />
      <Services />
      <About />
      <Cta />
    </div>
  );
}
