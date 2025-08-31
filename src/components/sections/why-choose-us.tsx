import { Shield, Users, Award } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Florida Insurance Expertise",
      description: "Deep understanding of Florida insurance requirements, hurricane risks, and flood zones. We know what coverage works best in our unique climate.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Local Community Focus",
      description: "Born and raised in Southwest Florida, we're your neighbors. We understand local needs and provide personalized service you can trust.",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Competitive Rates",
      description: "We shop 50+ top-rated insurance carriers to find you the best coverage at the most competitive rates available in Florida.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose A & E Insurance Group?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
