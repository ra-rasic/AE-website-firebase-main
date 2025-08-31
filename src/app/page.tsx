import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { AiFeatures } from "@/components/sections/ai-features";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <AiFeatures />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
