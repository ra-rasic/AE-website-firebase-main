import { QuoteForm } from "@/components/quote-form";
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact A & E Insurance Group - Florida Insurance Agency",
    description: "Contact A & E Insurance Group for all your Florida insurance needs. Call (239) 591-1225 or visit our Bonita Springs location. Licensed insurance agents ready to help.",
    keywords: "contact A&E insurance, Florida insurance agent contact, Bonita Springs insurance office, insurance quotes Florida, (239) 591-1225"
};


export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Our Florida Insurance Experts</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to get started? Our licensed insurance professionals are here to help you find 
            the perfect coverage for your needs and budget.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Speak directly with a licensed Florida insurance agent</p>
                    <a href="tel:239-591-1225" className="text-xl font-bold text-primary hover:text-primary/80">
                      (239) 591-1225
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-muted-foreground mb-2">Send us your questions or request information</p>
                    <a href="mailto:Contact@aeinsurancegroup.net" className="text-lg font-semibold text-primary hover:text-primary/80">
                      Contact@aeinsurancegroup.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Our Office</h3>
                    <p className="text-muted-foreground mb-2">We serve clients throughout Southwest Florida</p>
                    <div className="text-gray-700">
                      <p className="font-medium">Bonita Springs Office:</p>
                      <p>28441 S Tamiami Trail, Suite 109, Bonita Springs, FL 34134</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-700">
                      <p>M-Thur: 9am - 3pm EST</p>
                      <p>Fri: 9am - 12pm EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-medium text-primary mb-2">Collier County:</p>
                    <ul className="space-y-1">
                      <li>Naples</li>
                      <li>Marco Island</li>
                      <li>Immokalee</li>
                      <li>Everglades City</li>
                      <li>Golden Gate</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-2">Lee County:</p>
                    <ul className="space-y-1">
                      <li>Fort Myers</li>
                      <li>Cape Coral</li>
                      <li>Bonita Springs</li>
                      <li>Estero</li>
                      <li>Sanibel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <QuoteForm title="Start Your Free Quote" />
              
              <div className="mt-8 text-center">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <MessageCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-green-800 font-medium">Quick Response Guarantee</p>
                  <p className="text-green-700 text-sm">We respond to all quote requests within 2 business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait for the unexpected. Contact us today and let our Florida insurance 
            experts protect what matters most to you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Request Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
