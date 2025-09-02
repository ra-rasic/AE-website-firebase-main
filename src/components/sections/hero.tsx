
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Shield, Award, Users } from "lucide-react";
import { QuoteForm } from "../quote-form";

export function Hero() {
  return (
    <section className="relative w-full pt-20 pb-10 bg-primary text-primary-foreground">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A beautiful Florida coastline"
        data-ai-hint="florida coastline"
        fill
        className="object-cover object-center absolute inset-0 z-0 opacity-20"
        priority
      />
      <div className="absolute inset-0 bg-primary/80 z-10" />
      <div className="relative z-20 container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-white">
              Florida's Trusted
              <span className="text-yellow-400 block"> Insurance Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Serving Collier and Lee Counties with comprehensive insurance solutions. Get personalized coverage that protects what matters most to you and your family.
            </p>
             <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-primary-foreground/90 pt-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-green-400" />
                  <span className="font-medium">20+ Insurance Carriers</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 mr-2 text-green-400" />
                  <span className="font-medium">22 Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-green-400" />
                  <span className="font-medium">Local Claims Support</span>
                </div>
              </div>
          </div>
           <div className="lg:pl-8" id="quote">
              <QuoteForm className="bg-white/95 backdrop-blur-sm" />
            </div>
        </div>
      </div>
    </section>
  );
}
