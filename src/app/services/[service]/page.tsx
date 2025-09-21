

import { QuoteForm } from "@/components/quote-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Phone, Calculator, Home, Car, Umbrella, Sailboat, Building, Users, Laptop, FileText, Anchor, BadgePercent, FileWarning, Wind, Droplets, Gem } from 'lucide-react';
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const serviceData: { [key: string]: any } = {
    'homeowners': {
        title: 'Homeowners Insurance Florida',
        subtitle: 'Florida Home Insurance Protection',
        description: 'Comprehensive homeowners insurance designed for Florida homes, including hurricane and wind protection.',
        icon: <Home className="w-12 h-12 text-accent" />,
        coreCoverages: [
          { title: "Dwelling (Coverage A)", description: "Covers the cost to repair or rebuild the physical structure of your home if it's damaged by a covered peril." },
          { title: "Other Structures (Coverage B)", description: "Protects structures on your property that aren't attached to your house, like a detached garage, shed, or fence." },
          { title: "Personal Property (Coverage C)", description: "Covers your personal belongings, such as furniture, clothing, and electronics, if they are stolen or damaged." },
          { title: "Loss of Use (Coverage D)", description: "Also known as Additional Living Expenses (ALE), this pays for temporary housing and living costs if your home is uninhabitable during repairs." },
          { title: "Personal Liability (Coverage E)", description: "Protects you financially if you're responsible for injuring someone or damaging their property, both on and off your property." },
          { title: "Medical Payments (Coverage F)", description: "Covers minor medical bills for guests who are injured on your property, regardless of who is at fault." }
        ],
        floridaCoverages: [
            { title: "Hurricane & Windstorm Coverage", description: "Essential protection for damage caused by named hurricanes and other wind events. This typically comes with a separate, percentage-based hurricane deductible that you must be aware of." },
            { title: "Flood Insurance", description: "CRITICAL: Standard home policies DO NOT cover flood damage from storm surge or rising water. A separate policy from the NFIP or a private carrier is a must-have in Florida." },
        ],
        optionalAddOns: [
            { title: "Water Backup Coverage", description: "Covers damage from a backed-up sewer or drain, which is not typically included in a standard policy." },
            { title: "Scheduled Personal Property", description: "Provides higher, specific coverage limits for high-value items like jewelry, art, or firearms that exceed standard policy limits." },
            { title: "Ordinance or Law Coverage", description: "Helps pay the extra cost to rebuild your home to current, stricter building codes after a major loss." },
        ],
        discounts: [
          "Wind Mitigation Credits", "Secured Community/Gated", "Newer Home", "Multi-Policy (Bundle)",
          "Security & Fire Alarms", "Claims-Free History", "New Roof", "Retired/55+ Age"
        ],
        factors: [
          'Home age, construction type, and roof condition',
          'Distance from the coast and flood zone',
          'Hurricane mitigation features (wind-rated windows, etc.)',
          'Your personal claims history and credit score',
          'Selected coverage limits and deductible choices'
        ],
        breadcrumb: "Homeowners Insurance"
    },
    'auto': {
        title: 'Auto Insurance Florida',
        subtitle: 'Comprehensive Florida Auto Insurance Coverage',
        description: 'Protect yourself on Florida roads with comprehensive auto insurance that meets state requirements and provides peace of mind.',
        icon: <Car className="w-12 h-12 text-accent" />,
        requiredCoverages: [
          { title: "Personal Injury Protection (PIP)", description: "Covers 80% of your medical bills and 60% of lost wages up to $10,000, regardless of who is at fault. This is the foundation of Florida's no-fault law." },
          { title: "Property Damage Liability (PDL)", description: "Pays for damage you cause to another person's vehicle or property. A minimum of $10,000 is required." },
        ],
        optionalCoverages: [
          { title: "Bodily Injury Liability (BIL)", description: "Covers injuries you cause to others in an accident. While not always required, it's essential for protecting your assets from lawsuits." },
          { title: "Uninsured/Underinsured Motorist (UM)", description: "Covers your injuries and expenses if you're hit by a driver with little or no insurance. Crucial in a state with many uninsured drivers." },
          { title: "Collision Coverage", description: "Pays to repair or replace your vehicle after an accident with another object or vehicle, regardless of fault." },
          { title: "Comprehensive Coverage", description: "Covers damage to your vehicle from non-collision events like theft, vandalism, storms, or hitting an animal." },
          { title: "Medical Payments (MedPay)", description: "Helps pay for medical expenses for you and your passengers after an accident, regardless of fault. It can cover costs PIP doesn't." },
          { title: "Rental Reimbursement", description: "Covers the cost of a rental car while your vehicle is being repaired after a covered claim." }
        ],
        specialFilings: [
            { title: "SR-22 Filing", description: "A certificate of financial responsibility required by the state after certain driving-related violations, such as a DUI conviction or driving without insurance. It proves you have the required liability coverage." },
            { title: "FR-44 Filing", description: "Similar to an SR-22 but requires much higher liability coverage limits. It is typically required for drivers convicted of more serious offenses, such as a DUI with bodily injury." },
        ],
        discounts: [
          "Multi-Policy (Bundle Home/Auto)", "Safe Driver (Clean Record)", "Good Student",
          "Multi-Car", "Paid-in-Full", "Homeowner", "Defensive Driving Course",
          "Vehicle Safety Features (Airbags, Anti-Lock Brakes)"
        ],
        factors: [
          'Driving record, accidents, and violations',
          'Vehicle make, model, age, and safety features', 
          'Your chosen coverage limits and deductibles',
          'Garage location and annual mileage',
          'Credit history and insurance score'
        ],
        breadcrumb: "Auto Insurance"
      },
    'flood': {
      title: 'Flood Insurance Florida',
      subtitle: 'Essential Flood Protection for Florida Properties',
      description: 'Protect your Florida property with comprehensive flood insurance through the NFIP and private carriers. Standard homeowners policies DO NOT cover flood damage.',
      icon: <Anchor className="w-12 h-12 text-accent" />,
      coverageOptions: [
        { title: "NFIP Coverage", description: "Government-backed flood insurance with standardized rates from the National Flood Insurance Program.", icon: Shield },
        { title: "Private Flood Insurance", description: "Often offers more comprehensive coverage, higher limits, and additional benefits than the NFIP.", icon: Droplets },
      ],
      whatsCovered: [
        { title: "Building Coverage", description: "Protects the structure of your home, including the foundation, electrical/plumbing systems, HVAC, and permanently installed items like cabinets." },
        { title: "Contents Coverage", description: "Covers your personal belongings, such as furniture, clothing, electronics, and other valuables, from flood damage." },
      ],
      floodZones: [
        { zone: "Zone X", risk: "Low-to-Moderate Risk", description: "Areas outside the high-risk floodplains. Flood insurance is still highly recommended as over 25% of claims occur here." },
        { zone: "Zone AE", risk: "High Risk", description: "Areas with a 1% annual chance of flooding. Flood insurance is typically required by mortgage lenders." },
        { zone: "Zone VE", risk: "High Risk (Coastal)", description: "Coastal areas with an additional hazard from storm-induced wave action. The highest risk zone." },
      ],
      discounts: [
        "Preferred Risk Policies", "Community Rating System (CRS) Discount", "Elevation Certificate Savings", "Flood Vents & Mitigation Credits"
      ],
      factors: [
        'FEMA flood zone designation (e.g., AE, VE, X)',
        'The property\'s elevation and foundation type (e.g., slab-on-grade, elevated)',
        'Previous flood claims history for the property',
        'The community\'s participation and rating in the NFIP',
        'Your desired coverage limits and deductible amounts'
      ],
      breadcrumb: "Flood Insurance"
    },
    'umbrella': {
      title: 'Umbrella Insurance Florida',
      subtitle: 'Extra Liability Protection for Your Assets',
      description: 'Extend your liability protection beyond your auto and home insurance limits with personal umbrella insurance, protecting your assets and future earnings.',
      icon: <Umbrella className="w-12 h-12 text-accent" />,
      requirements: [
        { title: "Personal Liability Protection", description: "Provides an additional layer of liability coverage, typically from $1 million to $5 million or more, on top of your existing home and auto policies." },
        { title: "Legal Defense Costs", description: "Covers attorney fees, court costs, and legal expenses for covered liability claims, often outside of the main policy limit, even if the lawsuit is groundless." },
      ],
      benefits: [
        { title: "Worldwide Coverage", description: "Your liability protection extends globally, offering peace of mind when you travel abroad." },
        { title: "Broader Coverage", description: "Can cover claims not included in your underlying policies, such as libel, slander, false arrest, and rental property liability." },
        { title: "Asset Protection", description: "Safeguards your savings, investments, home, and future income from being seized to pay for a large judgment against you." },
      ],
      scenarios: [
          { title: "Major Auto Accident", description: "You cause a multi-vehicle accident with severe injuries. The damages total $1 million, but your auto policy's liability limit is $300,000. Your umbrella policy covers the remaining $700,000, protecting your assets." },
          { title: "Incident at Your Home", description: "A guest is seriously injured diving into your pool and sues for $1.5 million. Your homeowners liability limit is $500,000. Your umbrella policy provides the additional $1 million of coverage needed." },
      ],
      localInfo: 'In a high-asset, litigious state like Florida, an umbrella policy is a critical tool for asset protection. It provides an essential safety net against unforeseen, catastrophic events.',
      factors: [
        'Total value of your assets and net worth',
        'Liability limits on your underlying policies',
        'Your personal lifestyle and risk exposure (pools, boats, etc.)',
        'Your profession and public profile',
        'The amount of coverage you wish to purchase'
      ],
      breadcrumb: "Umbrella Insurance"
    },
    'boat': {
        title: 'Boat & PWC Insurance',
        subtitle: 'Marine Insurance for Florida Waters',
        description: 'Comprehensive marine insurance for Florida boaters, covering your vessel, passengers, and liability on the water.',
        icon: <Sailboat className="w-12 h-12 text-accent" />,
        essentialCoverages: [
          { title: "Physical Damage Coverage", description: "Protects your boat's hull, motor, and equipment from collision, theft, vandalism, and weather damage." },
          { title: "Liability Protection", description: "Covers bodily injury and property damage you cause to others while operating your boat or PWC." },
        ],
        smartCoverages: [
          { title: "Medical Payments", description: "Covers medical expenses for you and your passengers injured in a boating accident, regardless of fault." },
          { title: "Uninsured Boater Coverage", description: "Protects you and your passengers if you're hit by a boater with little or no insurance." },
          { title: "Personal Effects Coverage", description: "Covers fishing equipment, electronics, and personal belongings on your boat that aren't part of the boat itself." },
        ],
        floridaRisks: [
            { title: "Hurricane Season", items: ["Named storm deductibles", "Haul-out coverage reimbursement", "Emergency towing", "Wreck removal"] },
            { title: "Saltwater Risks", items: ["Corrosion protection", "Fuel spill liability", "Fishing equipment coverage", "Electronics protection"] },
        ],
        discounts: [
          "Boating Safety Course", "Multi-Policy (Bundle)", "Boat Club Membership", "Experienced Boater", "Safety Equipment", "Lay-Up Period (Off-Season)"
        ],
        factors: [
          'Boat type (e.g., center console, cruiser), age, and value',
          'Engine horsepower and maximum speed',
          'Where you navigate (inland, coastal, offshore)',
          'Storage location (marina, lift, trailer)',
          'Your boating experience and safety course certifications'
        ],
        breadcrumb: "Boat & PWC Insurance"
    },
    'condo-insurance': {
        title: 'Condo Insurance (HO-6)',
        subtitle: 'Specialized Coverage for Florida Condos',
        description: 'Protect your Florida condo unit with an HO-6 policy designed to fill the gaps left by your association\'s master policy.',
        icon: <Shield className="w-12 h-12 text-accent" />,
        essentialCoverages: [
            { title: "Dwelling & Interior Structure", description: "Covers interior walls, flooring, fixtures, and any improvements or betterments you've made to your unit." },
            { title: "Personal Property", description: "Protects your belongings like furniture, clothing, and electronics from theft, fire, and other perils." }
        ],
        smartCoverages: [
            { title: "Personal Liability", description: "Protects you against lawsuits if someone is injured in your unit or you accidentally damage another unit." },
            { title: "Loss Assessment", description: "CRITICAL: Covers your share of a special assessment from the HOA for damage to common areas that exceeds the master policy's limits." },
            { title: "Additional Living Expenses", description: "Pays for temporary housing and living costs if your condo is uninhabitable due to a covered loss." }
        ],
        masterPolicy: {
            covers: [
                "Building exterior and foundation", "Common areas (lobbies, pools, gyms)", "Roof and shared plumbing/electrical", "Elevators and hallways"
            ],
            ho6Covers: [
                "Your personal belongings", "Interior walls, flooring, cabinets", "Upgrades and renovations", "Your personal liability"
            ]
        },
        discounts: [
            "Multi-Policy (Bundle)", "Security & Fire Alarms", "Gated Community", "Hurricane Shutters", "Claims-Free History", "Newer Condo"
        ],
        factors: [
            'Value of your personal property and interior upgrades',
            'Your condo association\'s master policy details',
            'Desired liability and loss assessment coverage limits',
            'Your personal claims history and location',
            'Chosen deductible amounts for different perils'
        ],
        breadcrumb: "Condo Insurance"
    },
    'bop': {
      title: 'Business Owners Policy (BOP)',
      subtitle: 'Comprehensive Coverage for Florida Businesses',
      description: 'Protect your Florida business with a Business Owners Policy.',
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
      ],
      breadcrumb: "Business Owners Policy"
    },
    'general-liability': {
        title: 'General Liability',
        subtitle: 'Essential Business Liability Protection',
        description: 'Protect your Florida business against third-party claims.',
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
        ],
        breadcrumb: "General Liability"
    },
    'workers-comp': {
        title: 'Workers Compensation',
        subtitle: 'Required Coverage for Florida Employers',
        description: 'Mandatory workers\' compensation insurance for Florida businesses.',
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
        ],
        breadcrumb: "Workers' Compensation"
    },
    'cyber-liability': {
        title: 'Cyber Liability',
        subtitle: 'Protect Your Business from Digital Threats',
        description: 'Essential cyber liability insurance for Florida businesses.',
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
        ],
        breadcrumb: "Cyber Liability"
    },
     'commercial-property': {
      title: 'Commercial Property Insurance',
      subtitle: 'Protect Your Florida Business Property',
      description: 'Comprehensive commercial property insurance for Florida businesses.',
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
      ],
      breadcrumb: "Commercial Property"
    },
    'errors-omissions': {
        title: 'Professional Liability (E&O)',
        subtitle: 'Errors & Omissions Coverage for Service Providers',
        description: 'Protect your professional services business from claims of negligence.',
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
        ],
        breadcrumb: "Errors & Omissions"
      }
};

const AutoInsurancePageContent = ({ service }: { service: any }) => (
    <>
      <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Shield className="w-6 h-6 text-primary mr-3" />
          Florida's Required Auto Insurance Coverages
        </h2>
        <div className="space-y-4">
          {service.requiredCoverages.map((item: {title: string, description: string}, index: number) => (
            <div key={index}>
              <h3 className="font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6">Smart, Optional Coverages for Full Protection</h2>
        <div className="space-y-4">
          {service.optionalCoverages.map((item: {title: string, description: string}, index: number) => (
            <div key={index}>
              <h3 className="font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <FileWarning className="w-6 h-6 text-primary mr-3" />
            FR-44 and SR-22 in Florida
        </h2>
        <div className="space-y-4">
            {service.specialFilings.map((item: {title: string, description: string}, index: number) => (
            <div key={index}>
                <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
            ))}
        </div>
      </Card>

      <Card className="p-8 mb-8 shadow-lg bg-secondary">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <BadgePercent className="w-6 h-6 text-primary mr-3" />
            Available Auto Insurance Discounts
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {service.discounts.map((discount: string, index: number) => (
                <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{discount}</span>
                </div>
            ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">Discount availability varies by carrier and eligibility.</p>
      </Card>
    </>
  );

const HomeownersInsurancePageContent = ({ service }: { service: any }) => (
    <>
        <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Shield className="w-6 h-6 text-primary mr-3" />
            Core Homeowners Coverages Explained
        </h2>
        <div className="space-y-4">
            {service.coreCoverages.map((item: {title: string, description: string}, index: number) => (
            <div key={index}>
                <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
            ))}
        </div>
        </Card>

        <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6">Crucial Coverages for Florida Homes</h2>
        <div className="space-y-4">
            {service.floridaCoverages.map((item: {title: string, description: string}, index: number) => (
            <div key={index}>
                <h3 className="font-semibold text-card-foreground flex items-center">
                    {item.title.includes('Hurricane') ? <Wind className="w-4 h-4 mr-2" /> : <Droplets className="w-4 h-4 mr-2" />}
                    {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
            ))}
        </div>
        </Card>
        
        <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">Smart Optional Add-Ons</h2>
            <div className="space-y-4">
                {service.optionalAddOns.map((item: {title: string, description: string}, index: number) => (
                <div key={index}>
                    <h3 className="font-semibold text-card-foreground flex items-center"><Gem className="w-4 h-4 mr-2" />{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                ))}
            </div>
        </Card>

        <Card className="p-8 mb-8 shadow-lg bg-secondary">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <BadgePercent className="w-6 h-6 text-primary mr-3" />
            How to Save on Your Homeowners Insurance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {service.discounts.map((discount: string, index: number) => (
                <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{discount}</span>
                </div>
            ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">Discount availability varies by carrier and eligibility.</p>
        </Card>
    </>
);

const FloodInsurancePageContent = ({ service }: { service: any }) => (
    <>
        <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">NFIP vs. Private Flood Insurance</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {service.coverageOptions.map((option: {title: string, description: string, icon: React.ElementType}, index: number) => {
                    const Icon = option.icon;
                    return (
                        <div key={index}>
                            <h3 className="font-semibold text-card-foreground flex items-center mb-2">
                                <Icon className="w-5 h-5 text-primary mr-2" />
                                {option.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">{option.description}</p>
                        </div>
                    );
                })}
            </div>
        </Card>

        <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">What Flood Insurance Covers</h2>
            <div className="space-y-4">
                {service.whatsCovered.map((item: {title: string, description: string}, index: number) => (
                    <div key={index}>
                        <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
             <p className="text-xs text-muted-foreground mt-4">Note: Coverage for basements and Additional Living Expenses can vary, especially between NFIP and private policies.</p>
        </Card>

        <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">Understanding Florida Flood Zones</h2>
            <div className="space-y-4">
                {service.floodZones.map((zone: {zone: string, risk: string, description: string}, index: number) => (
                    <div key={index} className="flex items-start">
                        <div className="w-20 font-bold text-primary flex-shrink-0">{zone.zone}:</div>
                        <div>
                            <h4 className="font-semibold">{zone.risk}</h4>
                            <p className="text-muted-foreground text-sm">{zone.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
        
        <Card className="p-8 mb-8 shadow-lg bg-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <BadgePercent className="w-6 h-6 text-primary mr-3" />
                Ways to Save on Flood Insurance
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {service.discounts.map((discount: string, index: number) => (
                    <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{discount}</span>
                    </div>
                ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">An Elevation Certificate can significantly lower your premium in high-risk zones.</p>
        </Card>
    </>
);

const UmbrellaInsurancePageContent = ({ service }: { service: any }) => (
    <>
      <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Shield className="w-6 h-6 text-primary mr-3" />
          Essential Umbrella Coverages
        </h2>
        <div className="space-y-4">
          {service.requirements.map((item: { title: string; description: string }, index: number) => (
            <div key={index}>
              <h3 className="font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>
  
      <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6">Additional Smart Coverages</h2>
        <div className="space-y-4">
          {service.benefits.map((item: { title: string; description: string }, index: number) => (
            <div key={index}>
              <h3 className="font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>
  
      <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6">When Umbrella Insurance Saves You</h2>
        <p className="text-muted-foreground mb-4 text-sm">
            Real scenarios where umbrella insurance provides crucial protection beyond your standard policy limits.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
            {service.scenarios.map((item: { title: string; description: string }, index: number) => (
                <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
            ))}
        </div>
      </Card>

      <Card className="p-8 mb-8 shadow-lg bg-secondary">
        <h2 className="text-2xl font-bold text-foreground mb-4">Florida-Specific Considerations</h2>
        <p className="text-muted-foreground leading-relaxed">{service.localInfo}</p>
      </Card>
    </>
);

const BoatInsurancePageContent = ({ service }: { service: any }) => (
    <>
        <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                Essential Boat Coverages
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {service.essentialCoverages.map((item: { title: string; description: string }, index: number) => (
                    <div key={index}>
                        <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </Card>

        <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">Additional Smart Coverages</h2>
            <div className="space-y-4">
                {service.smartCoverages.map((item: { title: string; description: string }, index: number) => (
                    <div key={index}>
                        <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </Card>

        <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">Florida Marine Insurance Considerations</h2>
            <p className="text-muted-foreground mb-4 text-sm">
                Florida's unique marine environment requires specialized coverage for hurricanes, saltwater exposure, and year-round boating conditions.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                {service.floridaRisks.map((risk: { title: string; items: string[] }, index: number) => (
                    <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-card-foreground mb-2">{risk.title}</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                            {risk.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Card>

        <Card className="p-8 mb-8 shadow-lg bg-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <BadgePercent className="w-6 h-6 text-primary mr-3" />
                Available Boat Insurance Discounts
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                {service.discounts.map((discount: string, index: number) => (
                    <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{discount}</span>
                    </div>
                ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">Discount availability varies by carrier and eligibility.</p>
        </Card>
    </>
);

const CondoInsurancePageContent = ({ service }: { service: any }) => (
    <>
      <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Shield className="w-6 h-6 text-primary mr-3" />
          Essential HO-6 Coverages
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.essentialCoverages.map((item: { title: string; description: string }, index: number) => (
            <div key={index}>
              <h3 className="font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>
  
      <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6">Additional Smart Coverages</h2>
        <div className="space-y-4">
          {service.smartCoverages.map((item: { title: string; description: string }, index: number) => (
            <div key={index}>
              <h3 className="font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>
  
      <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6">Understanding Your Association's Master Policy</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Your HOA's policy covers the building and common areas, but your HO-6 policy is crucial for protecting everything inside your unit.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-semibold text-card-foreground mb-2">Master Policy Covers</h3>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                    {service.masterPolicy.covers.map((item: string, index: number) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-semibold text-card-foreground mb-2">Your HO-6 Policy Covers</h3>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                    {service.masterPolicy.ho6Covers.map((item: string, index: number) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
      </Card>

      <Card className="p-8 mb-8 shadow-lg bg-secondary">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <BadgePercent className="w-6 h-6 text-primary mr-3" />
            Available Condo Insurance Discounts
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {service.discounts.map((discount: string, index: number) => (
                <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{discount}</span>
                </div>
            ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">Discount availability varies by carrier and eligibility.</p>
      </Card>
    </>
  );

const DefaultServicePageContent = ({ service }: { service: any }) => (
    <>
        <Card className="p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Shield className="w-6 h-6 text-primary mr-3" />
            Coverage Requirements
        </h2>
        <ul className="space-y-3">
            {service.requirements.map((req: string, index: number) => (
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
            {service.benefits.map((benefit: string, index: number) => (
            <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
            </div>
            ))}
        </div>
        </Card>

        <Card className="p-8 mb-8 shadow-lg bg-secondary">
        <h2 className="text-2xl font-bold text-foreground mb-4">Florida-Specific Considerations</h2>
        <p className="text-muted-foreground leading-relaxed">{service.localInfo}</p>
        </Card>
    </>
)


export default function ServicePage({ params }: { params: { service: string } }) {
  const currentService = serviceData[params.service] || {
    title: 'Insurance Service',
    subtitle: 'Professional Insurance Coverage',
    description: 'Comprehensive insurance protection tailored to your specific needs.',
    icon: <Shield className="w-12 h-12 text-accent" />,
    requirements: ['Coverage tailored to your needs'],
    benefits: ['Professional service', 'Competitive rates', 'Expert guidance'],
    localInfo: 'We provide specialized insurance solutions for Florida residents.',
    factors: ['Individual needs assessment', 'Coverage preferences', 'Budget considerations'],
    breadcrumb: "Insurance Service"
  };

  const isPersonal = ['homeowners', 'auto', 'flood', 'umbrella', 'boat', 'condo-insurance'].includes(params.service);
  const parentPage = isPersonal ? {label: 'Personal Insurance', href: '/personal-insurance'} : {label: 'Business Insurance', href: '/business-insurance'};

  const PageContent = () => {
    switch(params.service) {
        case 'auto':
            return <AutoInsurancePageContent service={currentService} />;
        case 'homeowners':
            return <HomeownersInsurancePageContent service={currentService} />;
        case 'flood':
            return <FloodInsurancePageContent service={currentService} />;
        case 'umbrella':
            return <UmbrellaInsurancePageContent service={currentService} />;
        case 'boat':
            return <BoatInsurancePageContent service={currentService} />;
        case 'condo-insurance':
            return <CondoInsurancePageContent service={currentService} />;
        default:
            return <DefaultServicePageContent service={currentService} />;
    }
  }

  return (
    <>
      <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          parentPage,
          { label: currentService.breadcrumb }
      ]} />
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
              <PageContent />
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

    
