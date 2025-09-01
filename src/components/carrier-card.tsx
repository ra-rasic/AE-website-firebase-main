
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Carrier } from "@/lib/carrier-data";

interface CarrierCardProps {
    carrier: Carrier;
    actionType: 'claim' | 'billing';
}

export function CarrierCard({ carrier, actionType }: CarrierCardProps) {
  const { name, logo, website, general, claims, billing } = carrier;
  
  const actionLink = actionType === 'claim' ? claims.reportLink : billing.payLink;
  const actionText = actionType === 'claim' ? 'Report Claim' : 'Bill Pay';

  return (
    <Card className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 text-center flex-grow flex flex-col justify-between">
        <div className="relative h-24 mb-6">
            <Image 
                src={logo || `https://placehold.co/150x60/FFFFFF/777777/png?text=${name.replace(/\s/g, '+')}`}
                alt={`${name} logo`}
                fill
                className="object-contain"
            />
        </div>
        
        <div className="space-y-3 text-sm text-center">
            <div>
                <p className="text-xs uppercase text-muted-foreground tracking-wider mb-1">General</p>
                <a href={website} target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">Visit Website</a>
                <a href={`tel:${general.phone}`} className="block text-foreground">{general.phone}</a>
            </div>

            <Separator className="my-2" />

            <div>
                <p className="text-xs uppercase text-muted-foreground tracking-wider mb-1">Claims</p>
                <a href={claims.reportLink} target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">Report Claim</a>
                <a href={`tel:${claims.phone}`} className="block text-foreground">{claims.phone}</a>
            </div>

            <Separator className="my-2" />
            
            <div>
                <p className="text-xs uppercase text-muted-foreground tracking-wider mb-1">Billing</p>
                <a href={billing.payLink} target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">Bill Pay</a>
                <a href={`tel:${billing.phone}`} className="block text-foreground">{billing.phone}</a>
            </div>
        </div>

      </CardContent>
    </Card>
  );
}
