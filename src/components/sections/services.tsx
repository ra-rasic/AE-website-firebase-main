import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Car, Home, Building, Anchor } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Auto Insurance",
    description: "Comprehensive coverage for Florida drivers with competitive rates and excellent customer service.",
    link: "/services/auto",
    icon: <Car className="w-10 h-10 text-primary" />
  },
  {
    title: "Homeowners Insurance",
    description: "Protect your Florida home against hurricanes, floods, and other risks specific to our state.",
    link: "/services/homeowners",
    icon: <Home className="w-10 h-10 text-primary" />
  },
  {
    title: "Business Insurance",
    description: "Complete commercial insurance solutions for Florida businesses of all sizes.",
    link: "/business-insurance",
    icon: <Building className="w-10 h-10 text-primary" />
  },
  {
    title: "Flood Insurance",
    description: "Essential flood protection for Florida properties, required by many lenders.",
    link: "/services/flood",
    icon: <Anchor className="w-10 h-10 text-primary" />
  }
];


export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Insurance Solutions for Florida Families & Businesses</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
            We understand Florida's unique insurance challenges. From hurricane protection to flood coverage, we provide comprehensive solutions tailored to Southwest Florida residents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
             <Link key={index} href={service.link} className="group">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <CardHeader className="items-center">
                  <div className="p-3 w-fit transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                   <div className="flex items-center justify-center text-primary font-medium group-hover:text-accent transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
