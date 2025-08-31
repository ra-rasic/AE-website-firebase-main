import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building, Truck, Briefcase, Construction, HardHat, ShieldCheck } from "lucide-react";
import Link from "next/link";

const businessServices = [
    { title: "Business Owners Policy", icon: <Briefcase className="w-8 h-8"/>, link: "/services/bop" },
    { title: "General Liability", icon: <ShieldCheck className="w-8 h-8"/>, link: "/services/general-liability" },
    { title: "Commercial Property", icon: <Building className="w-8 h-8"/>, link: "/services/commercial-property" },
    { title: "Workers' Compensation", icon: <Construction className="w-8 h-8"/>, link: "/services/workers-comp" },
    { title: "Commercial Auto", icon: <Truck className="w-8 h-8"/>, link: "/services/commercial-auto" },
    { title: "Cyber Liability", icon: <HardHat className="w-8 h-8"/>, link: "/services/cyber-liability" },
];

export default function BusinessInsurancePage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Business Insurance</h1>
        <p className="text-lg text-muted-foreground mt-2">Tailored solutions to protect your business.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businessServices.map((service, index) => (
          <Link href={service.link} key={index} className="group">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col p-6">
              <CardHeader className="items-center">
                 <div className="p-3 bg-primary/10 rounded-full w-fit text-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors mt-4">{service.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
