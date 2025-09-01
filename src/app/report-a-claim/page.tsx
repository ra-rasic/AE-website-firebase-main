
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { personalCarriers, commercialCarriers } from "@/lib/carrier-data";
import { CarrierList } from "@/components/carrier-list";

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
      
      <CarrierList 
        pageType="claim"
        personalCarriers={personalCarriers}
        commercialCarriers={commercialCarriers}
      />
    </>
  );
}
