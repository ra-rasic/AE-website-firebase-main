
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Home, Building2, Waves, Umbrella, Shield, Anchor, Heart, Truck, Laptop, Users } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata: Metadata = {
  title: "Insurance Services | A & E Insurance Group Florida",
  description:
    "Comprehensive personal and business insurance coverage in Florida. Home, auto, flood, business insurance and more from your local Bonita Springs experts.",
}

const personalServices = [
  {
    icon: Home,
    title: "Homeowners Insurance",
    href: "/services/homeowners",
    description: "Hurricane and wind protection for Florida homes",
  },
  {
    icon: Car,
    title: "Auto Insurance",
    href: "/services/auto",
    description: "PIP, UM, collision & comprehensive coverage for Florida drivers",
  },
  {
    icon: Building2,
    title: "Condo Insurance",
    href: "/services/condo-insurance",
    description: "HO-6 policies for Florida condominiums and high-rises",
  },
  {
    icon: Waves,
    title: "Flood Insurance",
    href: "/services/flood",
    description: "NFIP and private flood coverage for coastal properties",
  },
  {
    icon: Umbrella,
    title: "Umbrella Insurance",
    href: "/services/umbrella",
    description: "Extra liability protection beyond standard policies",
  },
  {
    icon: Anchor,
    title: "Boat Insurance",
    href: "/services/boat",
    description: "Marine coverage for boats, PWCs, and watercraft",
  },
]

const businessServices = [
  {
    icon: Shield,
    title: "Business Owners Policy",
    href: "/services/bop",
    description: "Comprehensive BOP coverage for small to medium businesses",
  },
  {
    icon: Users,
    title: "General Liability",
    href: "/services/general-liability",
    description: "Protection against third-party claims and lawsuits",
  },
  {
    icon: Home,
    title: "Commercial Property",
    href: "/services/commercial-property",
    description: "Coverage for business buildings, equipment, and inventory",
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    href: "/services/commercial-auto",
    description: "Fleet and business vehicle insurance coverage",
  },
  {
    icon: Heart,
    title: "Workers Compensation",
    href: "/services/workers-comp",
    description: "Required coverage for employee injuries and illnesses",
  },
  {
    icon: Laptop,
    title: "Cyber Liability",
    href: "/services/cyber-liability",
    description: "Protection against data breaches and cyber attacks",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insurance Services' }]} />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Comprehensive Insurance Services for Florida
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              From personal protection to business coverage, we offer specialized insurance solutions designed for
              Florida's unique risks and requirements. Get expert guidance from your local Bonita Springs insurance
              professionals.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Insurance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Personal Insurance Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your family, home, and personal assets with comprehensive coverage tailored for Florida
              residents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {personalServices.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.title} className="group hover:shadow-lg transition-shadow text-center flex flex-col">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-3">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <Button asChild variant="outline" className="w-full bg-transparent mt-auto">
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/personal-insurance">View All Personal Insurance</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Insurance Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Business Insurance Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive commercial insurance solutions to protect your Florida business from unexpected risks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {businessServices.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.title} className="group hover:shadow-lg transition-shadow text-center flex flex-col">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-3">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <Button asChild variant="outline" className="w-full bg-transparent mt-auto">
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/business-insurance">View All Business Insurance</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
