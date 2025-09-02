
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, Users } from "lucide-react";

const features = [
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
        description: "We shop 30+ top-rated insurance carriers to find you the best coverage at the most competitive rates available in Florida.",
    },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why Choose A & E Insurance Group?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center flex flex-col items-center">
                <div className="bg-primary rounded-full p-4 mb-4 inline-flex">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
