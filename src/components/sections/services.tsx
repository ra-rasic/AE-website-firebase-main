
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Home, Building2, Waves, Umbrella, Shield } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Comprehensive coverage including PIP, UM, and collision for Florida drivers.",
    href: "/services/auto",
    features: ["Personal Injury Protection", "Uninsured Motorist", "Multi-Policy Discounts"],
  },
  {
    icon: Home,
    title: "Homeowners Insurance",
    description: "Protect your home with specialized Florida coverage including wind and hurricane protection.",
    href: "/services/homeowners",
    features: ["Hurricane Coverage", "Wind Mitigation Credits", "4-Point Inspections"],
  },
  {
    icon: Building2,
    title: "Condo Insurance",
    description: "HO-6 policies tailored for Florida condominiums and high-rise living.",
    href: "/services/condo-insurance",
    features: ["Master Policy Gap Coverage", "Personal Property", "Loss Assessment"],
  },
  {
    icon: Waves,
    title: "Flood Insurance",
    description: "NFIP and private flood coverage for coastal Florida properties.",
    href: "/services/flood",
    features: ["NFIP Policies", "Private Market Options", "Elevation Certificates"],
  },
  {
    icon: Shield,
    title: "Business Insurance",
    description: "Comprehensive commercial coverage for Florida businesses of all sizes.",
    href: "/business-insurance",
    features: ["General Liability", "Commercial Property", "Workers Compensation"],
  },
  {
    icon: Umbrella,
    title: "Umbrella Insurance",
    description: "Extra liability protection beyond your standard policies.",
    href: "/services/umbrella",
    features: ["$1M+ Coverage", "Personal & Commercial", "Worldwide Protection"],
  },
]

export function Services() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Comprehensive Insurance Coverage for Florida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From hurricane protection to everyday coverage, we offer specialized insurance solutions designed for
            Florida's unique risks and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent mt-auto"
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
