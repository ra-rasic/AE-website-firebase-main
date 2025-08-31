import { Contact } from "@/components/sections/contact";
import { QuoteForm } from "@/components/quote-form";

export default function ContactPage() {
  return (
    <div className="py-12">
      <Contact />
      <div className="container pt-12">
        <QuoteForm title="Request a Consultation" />
      </div>
    </div>
  );
}
