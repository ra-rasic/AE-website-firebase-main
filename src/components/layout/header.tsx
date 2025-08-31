"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="AEGIS Insurance Group Logo" width={120} height={32} />
          </Link>
        </div>
        <div className="md:hidden">
           <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="AEGIS Insurance Group Logo" width={120} height={32} />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#quote">Get a Quote</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#quote">Get a Quote</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
