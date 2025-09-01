
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { personalCarriers, commercialCarriers } from "@/lib/carrier-data";
import { CarrierList } from "@/components/carrier-list";

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

      <CarrierList 
        pageType="billing"
        personalCarriers={personalCarriers}
        commercialCarriers={commercialCarriers}
      />
    </>
  );
}
