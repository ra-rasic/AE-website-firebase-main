export function TrustIndicators() {
  const indicators = [
    { value: "30+", label: "Years of Experience" },
    { value: "2,500+", label: "Satisfied Customers" },
    { value: "50+", label: "Insurance Carriers" },
    { value: "4.9★", label: "Customer Rating" },
  ];

  return (
    <section className="py-12 bg-secondary/70">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {indicators.map((indicator, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-primary mb-2">{indicator.value}</div>
              <div className="text-muted-foreground">{indicator.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
