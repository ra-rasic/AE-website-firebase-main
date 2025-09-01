
import { CreditCard, Phone, Building, Home } from "lucide-react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { personalCarriers, commercialCarriers } from "@/lib/carrier-data";
import { CarrierCard } from "@/components/carrier-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Pay Your Bill | A & E Insurance Group",
    description: "Make a payment on your insurance policy. Find direct links to the online payment portals for major Florida insurance carriers for your convenience.",
    keywords: "pay insurance bill, make a payment, florida insurance payment, online bill pay"
};


export default function PayBillPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Pay Bill' }
      ]} />
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Pay Your Insurance Bill</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            For your convenience, you can pay your insurance bill directly through your carrier's website. 
            Select your carrier from the list below to be directed to their secure payment portal.
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
                        <CarrierCard key={carrier.name} carrier={carrier} actionType="billing" />
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-6 flex items-center"><Building className="w-6 h-6 mr-3 text-primary" />Commercial & Specialty Carriers</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {commercialCarriers.map(carrier => (
                        <CarrierCard key={carrier.name} carrier={carrier} actionType="billing" />
                    ))}
                </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-md">
                <div className="text-center">
                    <CreditCard className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Billing Questions?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        If you have questions about your bill, payment options, or need assistance, please contact our office during business hours.
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
                <h3 className="text-lg font-semibold text-foreground mb-3">Information You May Need</h3>
                <ul className="space-y-3 text-muted-foreground list-disc pl-5 text-sm">
                  <li>Your policy number</li>
                  <li>Last name and zip code on the policy</li>
                  <li>A valid payment method (credit/debit card or bank account)</li>
                </ul>
                 <p className="text-xs text-muted-foreground mt-4">
                  Carrier portals are secure and your information is private.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
