
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard, Phone, Building, Home } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
    title: "Pay Your Bill | A & E Insurance Group",
    description: "Make a payment on your insurance policy. Find direct links to the online payment portals for major Florida insurance carriers for your convenience.",
    keywords: "pay insurance bill, make a payment, florida insurance payment, online bill pay"
};

const personalCarriers = [
    { name: "American Integrity", url: "#" },
    { name: "Bristol West", url: "#" },
    { name: "Citizens", url: "#" },
    { name: "Foremost", url: "#" },
    { name: "Heritage Property & Casualty", url: "#" },
    { name: "Homeowners Choice", url: "#" },
    { name: "Infinity Insurance", url: "#" },
    { name: "Manatee Insurance", url: "#" },
    { name: "Monarch National", url: "#" },
    { name: "Progressive", url: "#" },
    { name: "Safepoint Insurance", url: "#" },
    { name: "Security First", url: "#" },
    { name: "Slide Insurance", url: "#" },
    { name: "Southern Oak", url: "#" },
    { name: "Universal Property", url: "#" },
    { name: "Wright National Flood", url: "#" },
];

const commercialCarriers = [
    { name: "Bass Underwriters", url: "#" },
    { name: "BondExchange", url: "#" },
    { name: "Braishfield Assc.", url: "#" },
    { name: "Granda Insurance GIC", url: "#" },
    { name: "Hartford Flood", url: "#" },
    { name: "Heritage (Commerical)", url: "#" },
    { name: "Hull & Co", url: "#" },
    { name: "JIBNA", url: "#" },
    { name: "Mac Neill Group", url: "#" },
    { name: "RPS (First Rate)", url: "#" },
    { name: "RT Specialty", url: "#" },
];

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
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center"><Home className="w-6 h-6 mr-3 text-primary" />Personal Insurance Carriers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personalCarriers.map(carrier => (
                      <a 
                        key={carrier.name} 
                        href={carrier.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                         <div className="flex items-center">
                          <Image src={`https://placehold.co/100x40/FFFFFF/777777/png?text=${carrier.name.replace(/\s/g, '+')}`} width={100} height={40} alt={`${carrier.name} logo`} className="mr-4 object-contain h-10 w-24"/>
                        </div>
                        <Button variant="ghost" size="sm">Pay Bill →</Button>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center"><Building className="w-6 h-6 mr-3 text-primary" />Commercial & Specialty Carriers</CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {commercialCarriers.map(carrier => (
                       <a 
                        key={carrier.name} 
                        href={carrier.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <div className="flex items-center">
                          <Image src={`https://placehold.co/100x40/FFFFFF/777777/png?text=${carrier.name.replace(/\s/g, '+')}`} width={100} height={40} alt={`${carrier.name} logo`} className="mr-4 object-contain h-10 w-24"/>
                        </div>
                        <Button variant="ghost" size="sm">Pay Bill →</Button>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center"><CreditCard className="w-6 h-6 mr-3 text-primary" /> Billing Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about your bill, payment options, or need assistance, please contact our office during business hours.
                  </p>
                   <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <a href="tel:239-591-1225">
                            <Phone className="w-5 h-5 mr-2" />
                            Call (239) 591-1225
                        </a>
                    </Button>
                </CardContent>
              </Card>
              
               <Card>
                <CardHeader>
                  <CardTitle>Information You May Need</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                    <li>Your policy number</li>
                    <li>Last name and zip code on the policy</li>
                    <li>A valid payment method (credit/debit card or bank account)</li>
                  </ul>
                   <p className="text-xs text-muted-foreground mt-4">
                    Carrier portals are secure and your information is private.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
