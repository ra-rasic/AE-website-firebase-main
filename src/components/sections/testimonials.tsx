"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "A & E Insurance Group found me the perfect homeowners policy for our new place in Naples. The process was so easy, and they saved us money!",
    name: "Sarah L.",
    location: "Naples, FL",
    avatar: "SL",
  },
  {
    quote: "As a small business owner in Fort Myers, getting the right commercial insurance was daunting. The team at A & E made it simple and affordable. Highly recommend!",
    name: "Michael B.",
    location: "Fort Myers, FL",
    avatar: "MB",
  },
  {
    quote: "I bundled my auto and condo insurance and couldn't be happier. Fantastic service and great rates for Collier County residents.",
    name: "Jessica P.",
    location: "Marco Island, FL",
    avatar: "JP",
  },
    {
    quote: "Navigating flood insurance is a nightmare in Florida. A & E's expertise was invaluable. They explained everything clearly and got us covered.",
    name: "David R.",
    location: "Bonita Springs, FL",
    avatar: "DR",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Trusted by Floridians</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            See what our clients in Collier and Lee County are saying about us.
          </p>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="flex flex-col justify-between flex-grow p-6 space-y-4">
                      <p className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
                      <div className="flex items-center space-x-3 pt-4 border-t w-full">
                         <Avatar>
                          <AvatarImage src={`https://i.pravatar.cc/40?u=${testimonial.avatar}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                           <p className="font-semibold">{testimonial.name}</p>
                           <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
