import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Home, Car, Umbrella, Anchor, Sailboat } from "lucide-react";
import Link from "next/link";

const personalServices = [
    { title: "Homeowners Insurance", icon: <Home className="w-8 h-8"/>, link: "/services/homeowners" },
    { title: "Auto Insurance", icon: <Car className="w-8 h-8"/>, link: "/services/auto" },
    { title: "Flood Insurance", icon: <Anchor className="w-8 h-8"/>, link: "/services/flood" },
    { title: "Umbrella Insurance", icon: <Umbrella className="w-8 h-8"/>, link: "/services/umbrella" },
    { title: "Boat/PWC Insurance", icon: <Sailboat className="w-8 h-8"/>, link: "/services/boat" },
];

export default function PersonalInsurancePage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Personal Insurance</h1>
        <p className="text-lg text-muted-foreground mt-2">Coverage to protect you and your family.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personalServices.map((service, index) => (
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
