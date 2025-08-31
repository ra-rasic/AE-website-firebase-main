import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cta() {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Save on Insurance?</h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied Florida customers who trust A & E Insurance Group 
                    for their insurance needs. Get your free quote in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="#quote">Start Your Free Quote</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                        <a href="tel:239-591-1225">Call (239) 591-1225</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
