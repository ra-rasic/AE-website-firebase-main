"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "A & E Insurance Group saved me over $800 on my home and auto insurance while providing better coverage. Their Florida expertise is unmatched!",
    name: "Maria Rodriguez",
    location: "Naples, FL",
    avatar: "MR",
    rating: 5,
  },
  {
    quote: "When Hurricane Ian hit, they handled my claim professionally and quickly. I can't recommend them enough for Florida homeowners.",
    name: "John Thompson",
    location: "Fort Myers, FL",
    avatar: "JT",
    rating: 5,
  },
  {
    quote: "As a small business owner, their commercial insurance advice has been invaluable. They understand Florida business needs.",
    name: "Sarah Chen",
    location: "Bonita Springs, FL",
    avatar: "SC",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">What Our Florida Neighbors Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full flex flex-col shadow-md">
                <CardContent className="flex flex-col justify-between flex-grow p-6 space-y-4">
                   <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
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
            ))}
          </div>
      </div>
    </section>
  );
}
