
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone } from "lucide-react";

export function Cta() {
    return (
        <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Save on Insurance?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied Florida customers who trust A & E Insurance Group 
                    for their insurance needs. Get your free quote in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/contact">Get a Free Quote</Link>
                    </Button>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                        <a href="tel:239-591-1225">
                            <Phone className="w-5 h-5 mr-2" />
                            Call (239) 591-1225
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
