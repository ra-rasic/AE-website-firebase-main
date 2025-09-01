
"use client";

import { CreditCard, Phone, Building, Home, Search, LifeBuoy } from "lucide-react";
import { Carrier, CarrierCard } from "@/components/carrier-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface CarrierListProps {
  pageType: 'claim' | 'billing';
  personalCarriers: Carrier[];
  commercialCarriers: Carrier[];
}

export function CarrierList({ pageType, personalCarriers, commercialCarriers }: CarrierListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPersonalCarriers = personalCarriers.filter(carrier =>
    carrier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCommercialCarriers = commercialCarriers.filter(carrier =>
    carrier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const billingAside = (
    <aside className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-md">
        <div className="text-center">
            <CreditCard className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Billing Questions?</h3>
            <p className="text-muted-foreground text-sm mb-4">
                If you have questions about your bill, payment options, or need assistance, please contact our office during business hours.
            </p>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <a href="tel:239-591-1225">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (239) 591-1225
                </a>
            </Button>
        </div>
      </div>
      
       <div className="bg-card border p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-foreground mb-3">Information You May Need</h3>
        <ul className="space-y-3 text-muted-foreground list-disc pl-5 text-sm">
          <li>Your policy number</li>
          <li>Last name and zip code on the policy</li>
          <li>A valid payment method (credit/debit card or bank account)</li>
        </ul>
         <p className="text-xs text-muted-foreground mt-4">
          Carrier portals are secure and your information is private.
        </p>
      </div>
    </aside>
  );

  const claimAside = (
    <aside className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-md">
        <div className="text-center">
          <LifeBuoy className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-foreground mb-2">We're Here to Help</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Filing a claim can be stressful. If you're unsure about the process or need help communicating with your carrier, please don't hesitate to contact us.
          </p>
           <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <a href="tel:239-591-1225">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (239) 591-1225
                </a>
            </Button>
        </div>
      </div>

       <div className="bg-card border p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-foreground mb-3">What You'll Need</h3>
        <ul className="space-y-3 text-muted-foreground list-disc pl-5 text-sm">
          <li>Your policy number</li>
          <li>Date and time of the incident</li>
          <li>A detailed description of what happened</li>
          <li>Photos or videos of the damage</li>
          <li>A police report number, if applicable</li>
        </ul>
      </div>
    </aside>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
          <div className="mb-12">
              <div className="relative max-w-lg mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                      type="text"
                      placeholder="Search for your carrier..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 text-lg"
                  />
              </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
              {filteredPersonalCarriers.length > 0 && (
                  <>
                      <h2 className="text-2xl font-bold mb-6 flex items-center"><Home className="w-6 h-6 mr-3 text-primary" />Personal Insurance Carriers</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                          {filteredPersonalCarriers.map(carrier => (
                              <CarrierCard key={carrier.name} carrier={carrier} actionType={pageType} />
                          ))}
                      </div>
                  </>
              )}

              {filteredCommercialCarriers.length > 0 && (
                  <>
                      <h2 className="text-2xl font-bold mb-6 flex items-center"><Building className="w-6 h-6 mr-3 text-primary" />Commercial & Specialty Carriers</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {filteredCommercialCarriers.map(carrier => (
                              <CarrierCard key={carrier.name} carrier={carrier} actionType={pageType} />
                          ))}
                      </div>
                  </>
              )}

              {filteredPersonalCarriers.length === 0 && filteredCommercialCarriers.length === 0 && (
                  <div className="text-center py-16 bg-secondary rounded-lg">
                      <p className="text-lg text-muted-foreground">No carriers found for "{searchTerm}".</p>
                      <p className="text-sm text-muted-foreground mt-2">Please check the spelling or contact us for assistance.</p>
                  </div>
              )}
          </div>
          
          {pageType === 'billing' ? billingAside : claimAside}
        </div>
      </div>
    </section>
  )
}
