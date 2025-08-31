
import { Shield, Users, Award, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
    title: "About A & E Insurance Group - Florida Insurance Agency",
    description: "Learn about A & E Insurance Group, your trusted Florida insurance agency serving Naples, Fort Myers and surrounding areas since 2002. Meet our experienced team of licensed insurance professionals.",
    keywords: "about A&E insurance, Florida insurance agency, Naples insurance agents, Fort Myers insurance, licensed insurance professionals, local insurance experts"
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About A & E Insurance Group</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your trusted neighbors providing expert insurance guidance and protection 
            for Southwest Florida families and businesses since 2002.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Florida Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In 2002, A & E Insurance Group was co-founded by Heather Andrea and Tracy Ewing with a clear vision: to offer Floridians better insurance choices. After years representing a single, national insurance brand, they saw the need for an independent agency that could provide more flexibility, competitive rates, and truly personalized service to the Southwest Florida community.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Built on a cornerstone of trust and simplification, we've navigated everything from economic shifts to devastating hurricanes, evolving our mission to meet the challenges our neighbors face. Today, with over 30 years of personal experience, Heather continues to lead our agency with an unwavering passion for protecting our community.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are a pillar of reliability, proudly serving over 2,500 families and businesses across Collier and Lee Counties by providing insurance you can understand and depend on.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Honest, transparent advice with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Personal attention from licensed Florida professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Competitive rates from 50+ top-rated carriers</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Responsive service when you need us most</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Proudly Serving Southwest Florida</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collier County</h3>
                <p className="text-muted-foreground">
                  Naples, Marco Island, Immokalee, Everglades City, and surrounding communities
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lee County</h3>
                <p className="text-muted-foreground">
                  Fort Myers, Cape Coral, Bonita Springs, Estero, Sanibel, and nearby areas
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Local Expertise Matters</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Florida insurance is complex, with unique requirements for wind, flood, and sinkhole coverage. 
                Our local expertise means we understand exactly what coverage you need and which carriers 
                offer the best protection for your specific location.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We've helped thousands of neighbors navigate Florida's insurance challenges, from understanding 
                flood zones to finding affordable hurricane coverage that actually pays claims when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the A & E Difference?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our Florida insurance experts today for personalized service and competitive quotes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href="tel:239-591-1225">
                <Phone className="w-5 h-5 mr-2" />
                Call (239) 591-1225
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
