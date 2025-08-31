import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, MapPin, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Your Local Florida Insurance Experts
            </h2>
            <p className="text-muted-foreground md:text-lg">
              A & E Insurance Group isn't just another insurance agency. We're your neighbors, deeply rooted in the Bonita Springs community and dedicated to serving the residents and businesses of Collier and Lee counties.
            </p>
            <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                    <Users className="h-6 w-6 mr-4 mt-1 text-primary flex-shrink-0" />
                    <p>Our local expertise means we understand the unique challenges and risks of living and working in Florida, from hurricane preparedness to local liability laws.</p>
                </div>
                 <div className="flex items-start">
                    <Heart className="h-6 w-6 mr-4 mt-1 text-primary flex-shrink-0" />
                    <p>We believe in building lasting relationships based on trust and personalized service. Our mission is to provide you with the right coverage to protect your family, your assets, and your future.</p>
                </div>
            </div>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg group">
             <Image
                src="https://picsum.photos/600/400"
                alt="A & E Insurance Group friendly office"
                data-ai-hint="friendly office team"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
             <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">A & E Insurance Group</h3>
                <p className="text-sm">Bonita Springs, FL</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
