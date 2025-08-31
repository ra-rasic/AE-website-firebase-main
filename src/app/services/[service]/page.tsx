
import { QuoteForm } from "@/components/quote-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Phone, Calculator, Home, Car, Umbrella, Sailboat, Building, Users, Laptop, FileText, Anchor } from 'lucide-react';
import Link from "next/link";

const serviceData: { [key: string]: any } = {
    'homeowners': {
      title: 'Homeowners Insurance Florida',
      subtitle: 'Florida Home Insurance Protection',
      description: 'Comprehensive homeowners insurance designed for Florida homes, including hurricane and wind protection.',
      icon: <Home className="w-12 h-12 text-accent" />,
      requirements: [
        'Dwelling coverage for structure replacement',
        'Personal property protection for your belongings',
        'Liability coverage for accidents on your property',
        'Additional living expenses (ALE) coverage'
      ],
      benefits: [
        'Hurricane and windstorm protection',
        'Roof coverage options for Florida weather',
        'Personal property replacement cost',
        'Liability protection up to $1M+',
        'Additional living expenses if displaced',
        'Water damage and mold coverage options'
      ],
      localInfo: 'Florida homeowners face unique risks from hurricanes, sinkholes, and flooding. Many insurers have specific requirements for roof age and hurricane mitigation features.',
      factors: [
        'Home age, construction type, and roof condition',
        'Distance from the coast and flood zone',
        'Hurricane mitigation features (wind-rated windows, etc.)',
        'Your personal claims history and credit score',
        'Selected coverage limits and deductible choices'
      ]
    },
    'auto': {
      title: 'Auto Insurance Florida',
      subtitle: 'Comprehensive Florida Auto Insurance Coverage',
      description: 'Protect yourself on Florida roads with comprehensive auto insurance that meets state requirements and provides peace of mind.',
      icon: <Car className="w-12 h-12 text-accent" />,
      requirements: [
        'Personal Injury Protection (PIP) - $10,000 minimum',
        'Property Damage Liability (PDL) - $10,000 minimum',
        'Bodily Injury Liability (BIL) is highly recommended',
        'Uninsured/Underinsured Motorist (UM) Coverage'
      ],
      benefits: [
        'Florida state-required PIP/PDL coverage',
        'Protection against uninsured/underinsured drivers',
        'Comprehensive & collision damage coverage',
        'Claims support during business hours',
        'Multi-policy and safe driver discounts',
        'Flexible payment plans to fit your budget'
      ],
      localInfo: 'Florida is a no-fault state, requiring all drivers to carry PIP and property damage liability. With a high number of uninsured drivers on the road, UM coverage is crucial for your protection.',
      factors: [
        'Driving record, accidents, and violations',
        'Vehicle make, model, age, and safety features', 
        'Your chosen coverage limits and deductibles',
        'Garage location and annual mileage',
        'Credit history and insurance score'
      ]
    },
    'flood': {
      title: 'Flood Insurance Florida',
      subtitle: 'Essential Flood Protection for Florida Properties',
      description: 'Protect your Florida property with comprehensive flood insurance through the NFIP and private carriers.',
      icon: <Anchor className="w-12 h-12 text-accent" />,
      requirements: [
        'Building coverage for the structure',
        'Contents coverage for your belongings',
        'Often required for mortgages in designated flood zones',
        'Separate policy from homeowners insurance'
      ],
      benefits: [
        'National Flood Insurance Program (NFIP) policies',
        'Private market flood insurance options',
        'Higher coverage limits available vs. standard policies',
        'Replacement cost options for structure and contents',
        'Coverage for detached garages and other structures',
        'No waiting period in some private market cases'
      ],
      localInfo: 'Southwest Florida faces significant flood risk. Standard homeowners policies explicitly exclude flood damage, making a separate flood policy essential, even if you are not in a high-risk zone.',
      factors: [
        'FEMA flood zone designation (e.g., AE, X)',
        'Property elevation and foundation type',
        'Previous flood claims history',
        'The community\'s participation in the NFIP',
        'Desired coverage limits and deductibles'
      ]
    },
    'umbrella': {
      title: 'Umbrella Insurance Florida',
      subtitle: 'Extra Liability Protection for Florida Residents',
      description: 'Extend your liability protection beyond your auto and home insurance limits with personal umbrella coverage.',
      icon: <Umbrella className="w-12 h-12 text-accent" />,
      requirements: [
        'An underlying auto insurance policy',
        'An underlying homeowners or renters insurance policy',
        'Minimum liability limits on your base policies (e.g., $300k)',
        'A generally clean driving and claims history'
      ],
      benefits: [
        'Coverage from $1 million to $10 million+',
        'Protection against major lawsuits and judgments',
        'Worldwide liability coverage for travel',
        'Covers legal defense costs, often outside the limit',
        'Protects your current assets and future earnings',
        'Affordable annual premiums for significant protection'
      ],
      localInfo: 'In a high-asset, litigious state like Florida, an umbrella policy is a critical tool for asset protection. It provides an essential safety net against unforeseen, catastrophic events.',
      factors: [
        'Total value of your assets and net worth',
        'Liability limits on your underlying policies',
        'Your personal lifestyle and risk exposure (pools, boats, etc.)',
        'Your profession and public profile',
        'The amount of coverage you wish to purchase'
      ]
    },
    'boat': {
        title: 'Boat & PWC Insurance Florida',
        subtitle: 'Marine Insurance for Florida Waters',
        description: 'Comprehensive boat and personal watercraft insurance for Florida boaters and PWC owners.',
        icon: <Sailboat className="w-12 h-12 text-accent" />,
        requirements: [
          'Hull coverage for physical damage to your vessel',
          'Liability coverage for accidents and injuries',
          'Medical payments coverage for passengers',
          'Uninsured boater protection'
        ],
        benefits: [
          'Agreed value or actual cash value options',
          'On-water towing and assistance services',
          'Personal effects and fishing equipment coverage',
          'Fuel spill liability protection',
          'Hurricane haul-out reimbursement coverage',
          'Discounts for safety courses and equipment'
        ],
        localInfo: 'Florida waters present unique risks including hurricanes, submerged objects, and heavy boat traffic. Proper marine insurance is essential for all watercraft owners to navigate safely.',
        factors: [
          'Boat type (e.g., center console, cruiser), age, and value',
          'Engine horsepower and maximum speed',
          'Where you navigate (inland, coastal, offshore)',
          'Storage location (marina, lift, trailer)',
          'Your boating experience and safety course certifications'
        ]
    },
    'condo-insurance': {
        title: 'Condo Insurance Florida (HO-6)',
        subtitle: 'Specialized HO-6 Coverage for Florida Condos',
        description: 'Protect your Florida condo unit with an HO-6 policy covering your interior, belongings, and liability.',
        icon: <Shield className="w-12 h-12 text-accent" />,
        requirements: [
          'Coverage for interior walls, fixtures, and appliances',
          'Personal property and contents protection',
          'Personal liability coverage for accidents',
          'Loss assessment coverage for shared damages'
        ],
        benefits: [
          'Protection for interior finishes and upgrades',
          'Covers theft, fire, water leaks (from your unit)',
          'Liability protection if someone is injured in your unit',
          'Loss assessment helps pay for your share of common area repairs',
          'Additional living expenses if your unit is uninhabitable',
          'Meets most condo association insurance requirements'
        ],
        localInfo: 'Florida condo associations have a master policy for the building exterior and common areas, but you are responsible for the "walls-in." An HO-6 policy is crucial to cover your personal space and assets.',
        factors: [
          'Value of your personal property and upgrades',
          'Condo association\'s master policy details',
          'Your personal claims history',
          'Desired liability and loss assessment limits',
          'Deductible amounts for different perils'
        ]
    },
    'bop': {
      title: 'Business Owners Insurance Florida',
      subtitle: 'Comprehensive BOP Coverage for Florida Businesses',
      description: 'Protect your Florida business with a Business Owners Policy combining liability and property coverage.',
      icon: <Building className="w-12 h-12 text-accent" />,
      requirements: [
        'General liability coverage for third-party claims',
        'Commercial property protection for your assets',
        'Business interruption coverage for lost income',
        'Crime and theft protection'
      ],
      benefits: [
        'Cost-effective package pricing',
        'Comprehensive business protection in one policy',
        'Business interruption coverage included',
        'Equipment breakdown coverage options',
        'Available professional liability endorsements',
        'Tailored for Florida hurricane and business risks'
      ],
      localInfo: 'Florida businesses face hurricane risks, high litigation rates, and specific state requirements. A BOP provides essential, broad protection at an affordable price for small to medium-sized businesses.',
      factors: [
        'Business type and industry classification',
        'Annual revenue and number of employees',
        'Business location and building construction',
        'Value of equipment and inventory',
        'Specific operational risks and claims history'
      ]
    },
    'general-liability': {
        title: 'General Liability Insurance Florida',
        subtitle: 'Essential Business Liability Protection',
        description: 'Protect your Florida business against third-party claims with comprehensive general liability coverage.',
        icon: <Shield className="w-12 h-12 text-accent" />,
        requirements: [
            'Bodily injury liability coverage',
            'Property damage liability protection',
            'Personal and advertising injury coverage',
            'Medical expense coverage'
        ],
        benefits: [
            'Protection from third-party injury claims',
            'Coverage for damage to others\' property',
            'Legal defense cost coverage',
            'Product & completed operations liability',
            'Often required to sign contracts or leases',
            'Safeguards your business assets from lawsuits'
        ],
        localInfo: 'Florida has high litigation rates, making general liability insurance a foundational coverage for all businesses. Many clients and landlords require proof of this coverage before working with you.',
        factors: [
            'Type of business and industry risk',
            'Your business location and premises',
            'Number of employees and customer traffic',
            'Your products or services provided',
            'Desired coverage limits and aggregates'
        ]
    },
    'workers-comp': {
        title: 'Workers Compensation Insurance Florida',
        subtitle: 'Required Workers\' Comp Coverage for Florida Employers',
        description: 'Mandatory workers\' compensation insurance for Florida businesses to protect employees and comply with state law.',
        icon: <Users className="w-12 h-12 text-accent" />,
        requirements: [
            'Coverage for all eligible employees per state law',
            'Medical benefits for work-related injuries',
            'Wage replacement (disability) benefits',
            'Proof of coverage for state compliance'
        ],
        benefits: [
            'Fulfills legal requirements and avoids state penalties',
            'Covers employee medical care and rehabilitation',
            'Provides wage replacement during recovery',
            'Protects the business against employee lawsuits for injuries',
            'Access to return-to-work programs',
            'Potential for dividends based on safety performance'
        ],
        localInfo: 'Florida requires workers\' comp for most businesses with 4+ employees (and construction businesses with 1+ employee). Penalties for non-compliance are severe and can include stop-work orders.',
        factors: [
            'Industry classification codes (class codes)',
            'Total employee payroll',
            'Past claims history (Experience Mod)',
            'Company safety programs and record',
            'Coverage limits and any special endorsements'
        ]
    },
    'cyber-liability': {
        title: 'Cyber Liability Insurance Florida',
        subtitle: 'Protect Your Business from Digital Threats',
        description: 'Essential cyber liability insurance to protect Florida businesses from data breaches and cyber attacks.',
        icon: <Laptop className="w-12 h-12 text-accent" />,
        requirements: [
            'Data breach response coverage',
            'Cyber extortion and ransomware protection',
            'Business interruption from cyber events',
            'Regulatory defense coverage'
        ],
        benefits: [
            'Covers both first-party and third-party damages',
            'Pays for forensic investigation costs',
            'Covers customer notification and credit monitoring',
            'Protection against regulatory fines and penalties',
            'Ransomware payment negotiation and support',
            'Reputation management and PR support'
        ],
        localInfo: 'Florida businesses are major targets for cyber attacks. State and federal regulations require notification of data breaches, making the response costs significant. Cyber insurance is essential.',
        factors: [
            'Size of business and annual revenue',
            'Type and sensitivity of data you handle',
            'Your current IT security measures',
            'Industry and regulatory requirements (e.g., HIPAA)',
            'Desired coverage limits and sub-limits'
        ]
    },
     'commercial-property': {
      title: 'Commercial Property Insurance Florida',
      subtitle: 'Protect Your Florida Business Property',
      description: 'Comprehensive commercial property insurance for Florida businesses against hurricanes, theft, and other perils.',
      icon: <Building className="w-12 h-12 text-accent" />,
      requirements: [
        'Building coverage for owned structures',
        'Business personal property (BPP) coverage',
        'Protection for equipment and machinery',
        'Specific hurricane and wind coverage'
      ],
      benefits: [
        'Hurricane and windstorm damage protection',
        'Equipment breakdown coverage options',
        'Business interruption to cover lost income',
        'Extra expense coverage for temporary relocation',
        'Ordinance and law coverage for rebuilds',
        'Protects tenant improvements and betterments'
      ],
      localInfo: 'Florida commercial properties face severe hurricane risks, requiring specialized coverage. Policies have specific hurricane deductibles (often a percentage) and underwriting requirements.',
      factors: [
        'Building value and construction type (masonry vs. frame)',
        'Location and hurricane risk zone',
        'Value of business personal property (contents)',
        'Occupancy type and fire protection systems',
        'Desired coverage limits and deductibles'
      ]
    },
    'errors-omissions': {
        title: 'Professional Liability (E&O) Insurance Florida',
        subtitle: 'Errors & Omissions Coverage for Service Providers',
        description: 'Protect your professional services business from claims of negligence or failure to perform.',
        icon: <FileText className="w-12 h-12 text-accent" />,
        requirements: [
          'Coverage for professional negligence',
          'Protection against errors and omissions',
          'Legal defense cost coverage',
          'Often required for professional licensing'
        ],
        benefits: [
          'Covers financial loss to a client',
          'Pays for your legal defense',
          'Protects against claims of misrepresentation',
          'Customizable for various professions',
          'Can cover personal injury (libel or slander)',
          'Gives clients confidence in your services'
        ],
        localInfo: 'In Florida\'s service-based economy, E&O insurance is vital for professionals like consultants, real estate agents, and tech companies to protect against potentially devastating lawsuits.',
        factors: [
          'Your specific profession and industry',
          'Years of experience and training',
          'Contracts and client agreements in place',
          'Annual revenue and size of projects',
          'Past claims history'
        ]
      }
};


export default function ServicePage({ params }: { params: { service: string } }) {
  const currentService = serviceData[params.service] || {
    title: 'Insurance Service',
    subtitle: 'Professional Insurance Coverage',
    description: 'Comprehensive insurance protection tailored to your specific needs.',
    icon: <Shield className="w-12 h-12 text-accent" />,
    requirements: ['Coverage tailored to your needs'],
    benefits: ['Professional service', 'Competitive rates', 'Expert guidance'],
    localInfo: 'We provide specialized insurance solutions for Florida residents.',
    factors: ['Individual needs assessment', 'Coverage preferences', 'Budget considerations']
  };

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
                {currentService.icon}
            </div>
            <h1 className="text-5xl font-bold mb-4">{currentService.subtitle}</h1>
            <p className="text-xl text-primary-foreground/90">
              {currentService.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  Coverage Requirements
                </h2>
                <ul className="space-y-3">
                  {currentService.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Our Coverage?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {currentService.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 mb-8 shadow-lg bg-secondary">
                <h2 className="text-2xl font-bold text-foreground mb-4">Florida-Specific Considerations</h2>
                <p className="text-muted-foreground leading-relaxed">{currentService.localInfo}</p>
              </Card>

              <Card className="p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Calculator className="w-6 h-6 text-primary mr-3" />
                  Factors Affecting Your Rate
                </h2>
                <ul className="space-y-3">
                  {currentService.factors.map((factor: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{factor}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <aside className="space-y-8 lg:mt-0">
              <QuoteForm 
                title="Get Your Free Quote"
                serviceType={params.service}
              />

              <Card className="bg-green-50 border border-green-200 p-6 shadow-lg">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Need Immediate Help?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Speak with a licensed Florida insurance agent now.
                  </p>
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 w-full">
                    <a href="tel:239-591-1225">Call (239) 591-1225</a>
                  </Button>
                </div>
              </Card>

              <Card className="bg-primary text-primary-foreground p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-3">Florida Insurance Tips</h3>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li className="flex items-start"><span className="mr-2">•</span>Review coverage annually before hurricane season</li>
                  <li className="flex items-start"><span className="mr-2">•</span>Document your property with photos/video</li>
                  <li className="flex items-start"><span className="mr-2">•</span>Understand your deductibles and limits</li>
                  <li className="flex items-start"><span className="mr-2">•</span>Keep important documents in a safe place</li>
                </ul>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Multiple Types of Coverage?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bundle your insurance policies for maximum savings and simplified management. 
            Our Florida experts will design a comprehensive protection plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Bundle & Save</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <a href="tel:239-591-1225">Speak with an Agent</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
