
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/quote-form";
import { Building, Shield, Users, Laptop, Truck, FileText, CheckCircle } from 'lucide-react';
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const businessServices = [
    {
      title: "Business Owners Policy (BOP)",
      description: "Comprehensive package combining general liability and commercial property coverage.",
      icon: <Building className="w-8 h-8 text-primary" />,
      link: "/services/bop",
      highlights: ["General Liability", "Property Coverage", "Business Interruption", "Crime Coverage"]
    },
    {
      title: "General Liability Insurance", 
      description: "Protection against third-party bodily injury and property damage claims.",
      icon: <Shield className="w-8 h-8 text-primary" />,
      link: "/services/general-liability",
      highlights: ["Bodily Injury", "Property Damage", "Personal Injury", "Medical Payments"]
    },
    {
      title: "Workers' Compensation",
      description: "Required Florida coverage for employee injuries and occupational illnesses.",
      icon: <Users className="w-8 h-8 text-primary" />,
      link: "/services/workers-comp", 
      highlights: ["Medical Benefits", "Wage Replacement", "Disability Benefits", "Legal Compliance"]
    },
    {
      title: "Cyber Liability Insurance",
      description: "Modern protection against data breaches, cyber attacks, and digital threats.",
      icon: <Laptop className="w-8 h-8 text-primary" />,
      link: "/services/cyber-liability",
      highlights: ["Data Breach Response", "Cyber Extortion", "Business Interruption", "Legal Defense"]
    },
    {
      title: "Commercial Auto Insurance",
      description: "Fleet and vehicle coverage for Florida business transportation needs.",
      icon: <Truck className="w-8 h-8 text-primary" />,
      link: "/services/commercial-auto",
      highlights: ["Fleet Coverage", "Hired/Non-owned", "Commercial Liability", "Physical Damage"]
    },
    {
      title: "Professional Liability",
      description: "Errors & omissions coverage for professional service providers.",
      icon: <FileText className="w-8 h-8 text-primary" />,
      link: "/services/errors-omissions",
      highlights: ["E&O Coverage", "Legal Defense", "Professional Negligence", "Client Relations"]
    }
  ];

  const additionalServices = [
    "Commercial Property", "Directors & Officers", "Employment Practices",
    "Commercial Umbrella", "Builders Risk", "Business Interruption", 
    "Crime Insurance", "Surety Bonds", "Event Insurance",
    "Liquor Liability", "Inland Marine", "And More..."
  ];
  
const industries = [
    "Restaurants", "Retail Stores", "Professional Services", "Healthcare",
    "Real Estate", "Construction", "Technology", "Hospitality",
    "Manufacturing", "Transportation", "Agriculture", "Marine"
];

const quoteFormServices = [
    { value: "bop", label: "Business Owners Policy (BOP)" },
    { value: "general-liability", label: "General Liability" },
    { value: "workers-comp", label: "Workers' Compensation" },
    { value: "cyber-liability", label: "Cyber Liability" },
    { value: "commercial-auto", label: "Commercial Auto" },
    { value: "professional-liability", label: "Professional Liability" },
    { value: "other", label: "Other" },
];

export default function BusinessInsurancePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Business Insurance' }]} />
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Business Insurance Solutions</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
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
                  Learn More & Get Quote
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Additional Commercial Insurance Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="font-medium text-card-foreground">{service}</p>
              </div>
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
                    <Shield className="w-5 h-5 mr-3 text-green-400" />
                    <span>Free consultation and quotes</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-green-400" />
                    <span>Same-day policy binding available</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-green-400" />
                    <span>Claims support during business hours</span>
                  </div>
                </div>
              </div>
              <div>
                <QuoteForm 
                  title="Start Your Business Insurance Quote"
                  serviceType="business"
                  className="bg-card"
                  serviceOptions={quoteFormServices}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
