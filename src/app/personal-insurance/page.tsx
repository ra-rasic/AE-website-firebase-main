import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/quote-form";
import { Home, Car, Umbrella, Anchor, Sailboat, Shield } from "lucide-react";
import Link from "next/link";

const personalServices = [
    { 
      title: "Homeowners Insurance", 
      icon: <Home className="w-8 h-8 text-primary"/>, 
      link: "/services/homeowners",
      description: "Comprehensive protection for your Florida home against hurricanes, wind, and other perils.",
      highlights: ["Hurricane Protection", "Wind Coverage", "Personal Property", "Liability Protection"]
    },
    { 
      title: "Auto Insurance", 
      icon: <Car className="w-8 h-8 text-primary"/>, 
      link: "/services/auto",
      description: "Florida auto coverage including PIP, bodily injury, and uninsured motorist protection.",
      highlights: ["PIP Coverage", "Collision", "Comprehensive", "Uninsured Motorist"]
    },
    { 
      title: "Flood Insurance", 
      icon: <Anchor className="w-8 h-8 text-primary"/>, 
      link: "/services/flood",
      description: "Essential flood protection through NFIP and private carriers for Florida properties.",
      highlights: ["NFIP Policies", "Private Flood", "Contents Coverage", "Building Coverage"]
    },
    { 
      title: "Umbrella Insurance", 
      icon: <Umbrella className="w-8 h-8 text-primary"/>, 
      link: "/services/umbrella",
      description: "Extra liability protection beyond your auto and home insurance limits.",
      highlights: ["Excess Liability", "Asset Protection", "Legal Defense", "Worldwide Coverage"]
    },
    { 
      title: "Boat/PWC Insurance", 
      icon: <Sailboat className="w-8 h-8 text-primary"/>, 
      link: "/services/boat",
      description: "Marine insurance for boats, jet skis, and watercraft in Florida waters.",
      highlights: ["Hull Coverage", "Liability", "Medical Payments", "Towing"]
    },
    {
      title: "Condo Insurance",
      description: "Specialized coverage for Florida condominium owners and renters.",
      icon: <Shield className="w-8 h-8 text-primary" />,
      link: "/services/condo-insurance",
      highlights: ["HO-6 Policies", "Personal Property", "Loss Assessment", "Liability"]
    }
];

const additionalServices = [
    "Renters Insurance", "Classic Car Insurance", "RV Insurance", "Motorcycle Insurance",
    "Mobile Home Insurance", "Yacht Insurance", "Vacant Home Insurance", 
    "Secondary Home Insurance", "Rental Property Insurance", "Valuable Possessions Insurance"
];

export default function PersonalInsurancePage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Personal Insurance Solutions</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Protect your family and assets with comprehensive insurance coverage designed 
            specifically for Florida residents in Collier and Lee Counties.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalServices.map((service, index) => (
              <Card key={index} className="service-card flex flex-col p-8">
                 <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6 text-left">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.link}
                  className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                >
                  Learn More
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Additional Personal Insurance Services
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-card-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Get Personalized Coverage Today
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-6">
                  Our Florida insurance experts will analyze your needs and find the perfect 
                  coverage at competitive rates. No obligation, just honest advice.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-accent" />
                    <span>Free consultation and quotes</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-accent" />
                    <span>Same-day policy binding available</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-accent" />
                    <span>Claims support during business hours</span>
                  </div>
                </div>
              </div>
              
              <div>
                <QuoteForm 
                  title="Start Your Personal Insurance Quote"
                  serviceType="personal"
                  className="bg-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
