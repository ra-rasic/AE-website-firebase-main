
import { Phone, Building, Home, LifeBuoy } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { personalCarriers, commercialCarriers } from "@/lib/carrier-data";
import { CarrierCard } from "@/components/carrier-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Report a Claim | A & E Insurance Group",
    description: "File an insurance claim directly with your carrier. Find links and contact information for major Florida insurance providers for home, auto, and business claims.",
    keywords: "report a claim, file insurance claim, Florida insurance carriers, claims center"
};


export default function ReportClaimPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Report a Claim' }
      ]} />
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Report a Claim</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            For the fastest service, report your claim directly to your insurance carrier using the links below. 
            If you need assistance, our team is always here to help you through the process.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 flex items-center"><Home className="w-6 h-6 mr-3 text-primary" />Personal Insurance Carriers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {personalCarriers.map(carrier => (
                        <CarrierCard key={carrier.name} carrier={carrier} actionType="claim" />
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-6 flex items-center"><Building className="w-6 h-6 mr-3 text-primary" />Commercial & Specialty Carriers</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {commercialCarriers.map(carrier => (
                        <CarrierCard key={carrier.name} carrier={carrier} actionType="claim" />
                    ))}
                </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-md">
                <div className="text-center">
                  <LifeBuoy className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">We're Here to Help</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Filing a claim can be stressful. If you're unsure about the process or need help communicating with your carrier, please don't hesitate to contact us.
                  </p>
                   <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <a href="tel:239-591-1225">
                            <Phone className="w-5 h-5 mr-2" />
                            Call (239) 591-1225
                        </a>
                    </Button>
                </div>
              </div>

               <div className="bg-card border p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-foreground mb-3">What You'll Need</h3>
                <ul className="space-y-3 text-muted-foreground list-disc pl-5 text-sm">
                  <li>Your policy number</li>
                  <li>Date and time of the incident</li>
                  <li>A detailed description of what happened</li>
                  <li>Photos or videos of the damage</li>
                  <li>A police report number, if applicable</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
