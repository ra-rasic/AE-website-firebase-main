import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const companyDetails = {
  name: "A & E Insurance Group",
  address: "28441 S Tamiami Trail, Suite 109, Bonita Springs, FL 34134",
  phone: "239-591-1225",
  email: "Contact@aeinsurancegroup.net",
  hours: [
    "M-Thur: 9am - 3pm EST",
    "Fri: 9am - 12pm EST"
  ]
};

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
             <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.svg" alt="AEGIS Insurance Group Logo" width={150} height={40} />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              A & E Insurance Group is your dedicated partner for personal and business insurance in Florida, providing tailored solutions with local expertise.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-primary" />
                <a href="https://www.google.com/maps/search/?api=1&query=28441+S+Tamiami+Trail,+Suite+109,+Bonita+Springs,+FL+34134" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">{companyDetails.address}</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <a href={`tel:${companyDetails.phone}`} className="text-muted-foreground hover:text-primary">{companyDetails.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <a href={`mailto:${companyDetails.email}`} className="text-muted-foreground hover:text-primary">{companyDetails.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Hours</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {companyDetails.hours.map((line, index) => (
                <li key={index} className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 flex-shrink-0 text-primary"/>
                  <span className="text-muted-foreground">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AEGIS Insurance Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
