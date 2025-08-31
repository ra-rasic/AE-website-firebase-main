import { QuoteForm } from "@/components/quote-form";

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceTitle = params.service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">{serviceTitle} Insurance</h1>
        <p className="text-lg text-muted-foreground mt-2">Get a personalized quote for {serviceTitle} insurance today.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <QuoteForm serviceType={serviceTitle} />
      </div>
    </div>
  );
}
