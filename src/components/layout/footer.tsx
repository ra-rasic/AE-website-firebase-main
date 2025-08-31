import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';

const companyDetails = {
  name: "A & E Insurance Group",
  address: "28441 S Tamiami Trail, Suite 109, Bonita Springs, FL 34134",
  phone: "239-591-1225",
  email: "Contact@aeinsurancegroup.net",
  locations: "Bonita Springs, FL | Naples, FL | Fort Myers, FL",
  hours: [
    "M-Thur: 9am - 3pm EST",
    "Fri: 9am - 12pm EST"
  ]
};

const personalInsuranceLinks = [
    { href: "/services/auto", label: "Auto Insurance" },
    { href: "/services/homeowners", label: "Homeowners Insurance" },
    { href: "/services/flood", label: "Flood Insurance" },
    { href: "/services/boat", label: "Boat/PWC Insurance" },
    { href: "/services/umbrella", label: "Umbrella Insurance" },
];

const businessInsuranceLinks = [
    { href: "/services/bop", label: "Business Owners Policy" },
    { href: "/services/general-liability", label: "General Liability" },
    { href: "/services/commercial-property", label: "Commercial Property" },
    { href: "/services/workers-comp", label: "Workers' Compensation" },
    { href: "/services/cyber-liability", label: "Cyber Liability" },
];

const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Insurance Tips" },
    { href: "/faq", label: "FAQ" },
];


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
             <Link href="/" className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-primary" />
                <h1 className="text-xl font-bold">{companyDetails.name}</h1>
            </Link>
            <p className="text-sm text-gray-300 max-w-md">
              A & E Insurance Group is your dedicated partner for personal and business insurance in Florida, providing tailored solutions with local expertise.
            </p>
             <ul className="space-y-3 text-sm">
                 <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-primary" />
                    <span className="text-gray-300">{companyDetails.locations}</span>
                 </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <a href={`tel:${companyDetails.phone}`} className="text-gray-300 hover:text-primary">{companyDetails.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <a href={`mailto:${companyDetails.email}`} className="text-gray-300 hover:text-primary">{companyDetails.email}</a>
              </li>
            </ul>
          </div>

          {/* Personal Insurance */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">Personal Insurance</h3>
            <ul className="space-y-2">
                {personalInsuranceLinks.map(link => (
                     <li key={link.href}><Link href={link.href} className="text-gray-300 hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
                 <li><Link href="/personal-insurance" className="text-primary hover:text-primary/90 transition-colors">View All Personal →</Link></li>
            </ul>
          </div>
          
          {/* Business Insurance */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">Business Insurance</h3>
            <ul className="space-y-2">
                {businessInsuranceLinks.map(link => (
                     <li key={link.href}><Link href={link.href} className="text-gray-300 hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
                <li><Link href="/business-insurance" className="text-primary hover:text-primary/90 transition-colors">View All Business →</Link></li>
            </ul>
          </div>

          {/* Quick Links & Hours */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
             <ul className="space-y-2">
                {quickLinks.map(link => (
                     <li key={link.href}><Link href={link.href} className="text-gray-300 hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
            </ul>
            <div className="mt-6">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <ul className="space-y-2 text-sm">
                {companyDetails.hours.map((line, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-3 flex-shrink-0"/>
                    <span>{line}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} A & E Insurance Group. All rights reserved.</p>
           <p className="mt-2 text-xs">
            Website designed for superior SEO performance and local Florida search visibility.
          </p>
        </div>
      </div>
    </footer>
  );
}
