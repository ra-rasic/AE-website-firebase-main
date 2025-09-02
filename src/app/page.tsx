
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <About />
      <Cta />
    </div>
  );
}
