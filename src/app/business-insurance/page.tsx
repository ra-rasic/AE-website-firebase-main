import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/quote-form";
import { Building, Shield, Users, Laptop, Truck, FileText } from 'lucide-react';
import Link from "next/link";

const businessServices = [
    {
      title: "Business Owners Policy (BOP)",
      description: "Comprehensive package combining general liability and commercial property coverage.",
      icon: <Building className="w-8 h-8 text-primary" />,
      link: "/services/business-owners-insurance",
      highlights: ["General Liability", "Property Coverage", "Business Interruption", "Crime Coverage"]
    },
    {
      title: "General Liability Insurance", 
      description: "Protection against third-party bodily injury and property damage claims.",
      icon: <Shield className="w-8 h-8 text-primary" />,
      link: "/services/general-liability-insurance",
      highlights: ["Bodily Injury", "Property Damage", "Personal Injury", "Medical Payments"]
    },
    {
      title: "Workers' Compensation",
      description: "Required Florida coverage for employee injuries and occupational illnesses.",
      icon: <Users className="w-8 h-8 text-primary" />,
      link: "/services/workers-compensation-insurance", 
      highlights: ["Medical Benefits", "Wage Replacement", "Disability Benefits", "Legal Compliance"]
    },
    {
      title: "Cyber Liability Insurance",
      description: "Modern protection against data breaches, cyber attacks, and digital threats.",
      icon: <Laptop className="w-8 h-8 text-primary" />,
      link: "/services/cyber-liability-insurance",
      highlights: ["Data Breach Response", "Cyber Extortion", "Business Interruption", "Legal Defense"]
    },
    {
      title: "Commercial Auto Insurance",
      description: "Fleet and vehicle coverage for Florida business transportation needs.",
      icon: <Truck className="w-8 h-8 text-primary" />,
      link: "/services/commercial-auto-insurance",
      highlights: ["Fleet Coverage", "Hired/Non-owned", "Commercial Liability", "Physical Damage"]
    },
    {
      title: "Professional Liability",
      description: "Errors & omissions coverage for professional service providers.",
      icon: <FileText className="w-8 h-8 text-primary" />,
      link: "/services/errors-omissions-insurance",
      highlights: ["E&O Coverage", "Legal Defense", "Professional Negligence", "Client Relations"]
    }
  ];

  const additionalServices = [
    "Commercial Property Insurance", "Directors & Officers Liability", "Employment Practices Liability",
    "Commercial Umbrella", "Builders Risk Insurance", "Business Interruption", "Crime Insurance",
    "Commercial Bonds", "Surety Bonds", "Event Insurance", "Liquor Liability", "Inland Marine"
  ];
  
const industries = [
    "Restaurants", "Retail Stores", "Professional Services", "Healthcare",
    "Real Estate", "Construction", "Technology", "Hospitality",
    "Manufacturing", "Transportation", "Agriculture", "Marine"
];

export default function BusinessInsurancePage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Business Insurance Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your Florida business with comprehensive commercial insurance coverage. 
            From startups to established enterprises, we have the expertise to safeguard your success.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Business Insurance Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Florida businesses face unique risks from hurricanes to cyber threats. 
              Our commercial insurance solutions provide comprehensive protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
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
                  Get Quote
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Serve Florida Industries
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Additional Commercial Insurance Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
                <p className="font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Protect Your Florida Business
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-6">
                  Don't let unexpected events threaten your business success. Our commercial 
                  insurance experts will design a protection plan that fits your industry and budget.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-accent" />
                    <span>Industry-specific expertise</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-accent" />
                    <span>Competitive commercial rates</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-accent" />
                    <span>Dedicated claims advocacy</span>
                  </div>
                </div>
              </div>
              <div>
                <QuoteForm 
                  title="Get Your Business Insurance Quote"
                  serviceType="business"
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
