"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail, Shield, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      href: "#", 
      label: "Insurance Services",
      subLinks: [
        { href: "/personal-insurance", label: "Personal Insurance" },
        { href: "/business-insurance", label: "Business Insurance" }
      ] 
    },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

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
              <h1 className="text-xl font-bold text-foreground">A & E Insurance Group</h1>
              <p className="text-xs text-muted-foreground">Your Florida Insurance Experts</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center font-medium text-foreground hover:text-primary transition-colors">
                    {link.label} <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {link.subLinks.map(subLink => (
                        <Link key={subLink.href} href={subLink.href} className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-primary">
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                >
                  {link.label}
                </Link>
              )
            ))}
             <Button asChild className="cta-button text-white rounded-full px-6">
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
                        <span className="font-bold text-lg">A & E Insurance</span>
                     </Link>
                    <SheetClose asChild>
                         <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                         </Button>
                    </SheetClose>
                 </div>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    link.subLinks ? (
                      <div key={link.label}>
                         <p className="font-medium text-lg text-foreground px-2 pt-2">{link.label}</p>
                         <div className="flex flex-col space-y-2 pl-4 pt-2">
                            {link.subLinks.map(subLink => (
                               <SheetClose asChild key={subLink.href}>
                                <Link
                                  href={subLink.href}
                                  className="font-medium text-base text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {subLink.label}
                                </Link>
                              </SheetClose>
                            ))}
                         </div>
                      </div>
                    ) : (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="font-medium text-lg text-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    )
                  ))}
                  <SheetClose asChild>
                    <Button asChild className="cta-button text-white w-full mt-4">
                        <Link href="/#quote">Get Free Quote</Link>
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
