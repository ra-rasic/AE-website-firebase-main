
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard, Phone } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
    title: "Pay Your Bill | A & E Insurance Group",
    description: "Make a payment on your insurance policy. Find direct links to the online payment portals for major Florida insurance carriers for your convenience.",
    keywords: "pay insurance bill, make a payment, florida insurance payment, online bill pay"
};

const personalCarriers = [
    { name: "Progressive", url: "https://www.progressive.com/manage-policy/" },
    { name: "Travelers", url: "https://www.travelers.com/pay-bill" },
    { name: "Nationwide", url: "https://www.nationwide.com/personal/member-services/billing" },
    { name: "Safeco", url: "https://www.safeco.com/customer-resources/customer-support/billing-and-payments" },
    { name: "Foremost", url: "https://www.foremost.com/pay-bill/" },
    { name: "Tower Hill", url: "https://my.thig.com/auth/login" },
    { name: "Universal Property & Casualty", url: "https://universalproperty.com/amember/login/" },
    { name: "American Integrity", url: "https://my.aiicfl.com/Account/Login" },
    { name: "Citizens Property Insurance", url: "https://www.citizensfla.com/payment-options" },
    { name: "Security First", url: "https://my.securityfirstflorida.com/m/login" }
];

const commercialCarriers = [
    { name: "CNA", url: "https://www.cna.com/web/guest/cna/claims-center/billing-and-payment/" },
    { name: "The Hartford", url: "https://www.thehartford.com/business-insurance-billing" },
    { name: "Liberty Mutual", url: "https://www.libertymutual.com/business-insurance/billing-and-payment-options" },
    { name: "AmTrust Financial", url: "https://amtrustfinancial.com/payments" },
    { name: "Philadelphia Insurance", url: "https://www.phly.com/services/paymentoptions/" },
    { name: "USLI", url: "https://www.usli.com/make-a-payment/" }
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
          <h1 className="text-5xl font-bold mb-4">Pay Your Bill</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            For your convenience, you can pay your insurance bill directly through your carrier's website. 
            Select your carrier from the list below to get started.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">Personal Insurance Carriers</CardTitle>
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
                        <span className="font-semibold text-secondary-foreground">{carrier.name}</span>
                        <Button variant="ghost" size="sm">Pay Bill →</Button>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Commercial Insurance Carriers</CardTitle>
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
                        <span className="font-semibold text-secondary-foreground">{carrier.name}</span>
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
                  <CardTitle>Information Needed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                    <li>Your policy number</li>
                    <li>Last name and zip code</li>
                    <li>A valid payment method</li>
                  </ul>
                   <p className="text-xs text-muted-foreground mt-4">
                    Most carriers accept e-checks and major credit cards.
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
