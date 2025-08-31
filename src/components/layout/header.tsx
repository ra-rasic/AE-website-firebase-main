"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail, Shield } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-choose-us", label: "About Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:239-591-1225" className="flex items-center hover:text-yellow-300 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              (239) 591-1225
            </a>
            <a href="mailto:Contact@aeinsurancegroup.net" className="flex items-center hover:text-yellow-300 transition-colors">
              <Mail className="w-4 h-4 mr-1" />
              Contact@aeinsurancegroup.net
            </a>
          </div>
          <div className="hidden md:block">
            <span>Serving Collier & Lee Counties | Licensed in Florida</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Shield className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">AEGIS Insurance Group</h1>
              <p className="text-xs text-muted-foreground">Your Florida Insurance Experts</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
             <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
                <Link href="#quote">Get Free Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                 <div className="flex justify-between items-center border-b pb-4 mb-4">
                     <Link href="/" className="flex items-center space-x-2">
                        <Shield className="w-8 h-8 text-primary" />
                        <span className="font-bold text-lg">AEGIS Insurance</span>
                     </Link>
                    <SheetClose asChild>
                         <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                         </Button>
                    </SheetClose>
                 </div>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="font-medium text-lg text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-4">
                        <Link href="#quote">Get Free Quote</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
