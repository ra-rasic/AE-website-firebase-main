import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home, Car, Ship, Building2, Umbrella, Briefcase, HeartPulse,
  Truck, Wrench, Shield, Anchor, UserCheck, Construction, UserSquare,
  Building
} from "lucide-react";

const personalServices = [
  { title: "Homeowners", icon: <Home className="w-8 h-8"/> },
  { title: "Condo", icon: <Building className="w-8 h-8"/> },
  { title: "Auto", icon: <Car className="w-8 h-8"/> },
  { title: "Boat/PWC", icon: <Ship className="w-8 h-8"/> },
  { title: "Flood", icon: <Anchor className="w-8 h-8"/> },
  { title: "Umbrella", icon: <Umbrella className="w-8 h-8"/> },
  { title: "Renters", icon: <UserCheck className="w-8 h-8"/> },
  { title: "Classic Car", icon: <Car className="w-8 h-8"/> },
  { title: "Motorcycle", icon: <Car className="w-8 h-8"/> },
  { title: "RV", icon: <Truck className="w-8 h-8"/> },
  { title: "Yacht", icon: <Ship className="w-8 h-8"/> },
];

const businessServices = [
  { title: "Business Owners", icon: <Briefcase className="w-8 h-8"/> },
  { title: "General Liability", icon: <Shield className="w-8 h-8"/> },
  { title: "Commercial Property", icon: <Building2 className="w-8 h-8"/> },
  { title: "Commercial Auto", icon: <Truck className="w-8 h-8"/> },
  { title: "Errors & Omissions", icon: <Wrench className="w-8 h-8"/> },
  { title: "Cyber Liability", icon: <Shield className="w-8 h-8"/> },
  { title: "Workers’ Comp", icon: <HeartPulse className="w-8 h-8"/> },
  { title: "Builders Risk", icon: <Construction className="w-8 h-8"/> },
  { title: "Event Insurance", icon: <UserSquare className="w-8 h-8"/> },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Comprehensive Insurance Services</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            We offer a wide range of personal and business insurance products to protect what matters most to you in Florida.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-6 font-headline">Personal Insurance</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {personalServices.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="flex flex-col items-center justify-center p-4">
                  <div className="mb-4 bg-primary/10 text-primary rounded-full p-3 w-fit transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {service.icon}
                  </div>
                  <CardTitle className="text-sm font-semibold">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight mb-6 font-headline">Business Insurance</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {businessServices.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300 group">
                 <CardHeader className="flex flex-col items-center justify-center p-4">
                  <div className="mb-4 bg-primary/10 text-primary rounded-full p-3 w-fit transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {service.icon}
                  </div>
                  <CardTitle className="text-sm font-semibold">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
