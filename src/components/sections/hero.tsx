import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A beautiful Florida coastline"
        data-ai-hint="florida coastline"
        fill
        className="object-cover object-center absolute inset-0 z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 container px-4 md:px-6 text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
            Your Shield for Life in Florida
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            A & E Insurance Group provides comprehensive insurance solutions for Florida residents and businesses. Get peace of mind with coverage that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#quote">Get an Instant Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
