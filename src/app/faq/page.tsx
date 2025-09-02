
"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

const faqData = [
    {
      category: "General Insurance Questions",
      items: [
        {
          question: "What insurance coverage is required in Florida?",
          answer: "Florida requires all drivers to carry Personal Injury Protection (PIP) with a minimum of $10,000 and Property Damage Liability of $10,000. For homeowners, insurance isn't legally required unless you have a mortgage, but it's essential protection given Florida's hurricane risk."
        },
        {
          question: "Why do I need flood insurance in Florida?",
          answer: "Standard homeowners insurance doesn't cover flood damage. Given Florida's geography and hurricane risk, flood insurance is essential. Even properties outside high-risk flood zones can experience flooding, and mortgage lenders often require it."
        },
        {
          question: "How much does insurance cost in Florida?",
          answer: "Insurance costs vary based on location, coverage type, and individual factors. Florida rates can be higher due to hurricane risk, but we work with 30+ carriers to find competitive rates. Contact us for a personalized quote based on your specific needs."
        }
      ]
    },
    {
      category: "Auto Insurance",
      items: [
        {
          question: "What is PIP coverage and why is it required in Florida?",
          answer: "Personal Injury Protection (PIP) covers 80% of medical bills and 60% of lost wages regardless of who caused the accident. Florida is a no-fault state, making PIP mandatory for all drivers. It provides immediate medical coverage without waiting for fault determination."
        },
        {
          question: "Do I need uninsured motorist coverage in Florida?",
          answer: "While not required, uninsured motorist coverage is highly recommended. Florida has one of the highest rates of uninsured drivers in the US. This coverage protects you if you're hit by an uninsured or underinsured driver."
        },
        {
          question: "How do hurricane and weather events affect my auto insurance?",
          answer: "Comprehensive coverage protects against weather damage including hail, flooding, and falling debris during hurricanes. If you finance your vehicle, comprehensive coverage is typically required by the lender."
        }
      ]
    },
    {
      category: "Homeowners Insurance",
      items: [
        {
          question: "What's the difference between wind and hurricane coverage?",
          answer: "Wind coverage typically protects against straight-line winds and storms. Hurricane coverage specifically addresses damage from named hurricanes and may have separate deductibles. Many Florida policies have specific hurricane deductibles that apply when a hurricane warning is issued."
        },
        {
          question: "Why is my homeowners insurance so expensive in Florida?",
          answer: "Florida homeowners insurance costs more due to hurricane risk, fraud concerns, and litigation costs. However, we can help you find discounts for hurricane mitigation features, security systems, and bundling policies to reduce your overall costs."
        },
        {
          question: "What happens if my roof is over 20 years old?",
          answer: "Many Florida insurers have restrictions on older roofs, potentially limiting coverage or requiring replacement. We work with carriers that offer options for older roofs and can help you understand your coverage options and potential requirements."
        }
      ]
    },
    {
      category: "Business Insurance",
      items: [
        {
          question: "What is a Business Owners Policy (BOP)?",
          answer: "A BOP combines general liability and commercial property insurance into one package, often at a lower cost than purchasing separately. It's ideal for small to medium businesses and typically includes business interruption coverage."
        },
        {
          question: "Is workers' compensation required for Florida businesses?",
          answer: "Yes, Florida requires workers' compensation for most businesses with employees. Construction companies need it with just one employee, while other businesses need it with four or more employees. Penalties for non-compliance can be severe."
        },
        {
          question: "What is cyber liability insurance and do I need it?",
          answer: "Cyber liability insurance protects against data breaches, cyber attacks, and technology failures. With increasing digital threats, it's essential for any business that stores customer data, processes payments, or relies on technology for operations."
        }
      ]
    },
    {
      category: "Claims and Service",
      items: [
        {
          question: "How do I file a claim?",
          answer: "Contact us immediately at (239) 591-1225 or email Contact@aeinsurancegroup.net. We'll guide you through the process, help document damages, and advocate for you with the insurance company."
        },
        {
          question: "What should I do after a hurricane or severe weather?",
          answer: "First, ensure everyone's safety. Document damage with photos/video before cleanup. Contact us to report claims immediately. Don't make permanent repairs until an adjuster inspects the damage, but do make temporary repairs to prevent further damage."
        },
        {
          question: "How quickly can I get an insurance quote?",
          answer: "We typically provide quotes within 2 hours during business days. For urgent needs, call us directly at (239) 591-1225. Many quotes can be provided over the phone, and we offer same-day policy binding when needed."
        }
      ]
    }
  ];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get answers to common Florida insurance questions from our experienced agents. 
            Can't find what you're looking for? Contact us directly for personalized assistance.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={itemIndex} className="bg-card rounded-lg shadow-md overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-secondary transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-card-foreground pr-4">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4 pt-2">
                          <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our Florida insurance experts are here to help. Contact us for personalized answers 
            and free quotes tailored to your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="mailto:Contact@aeinsurancegroup.net">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Us An Email
                </a>
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
    </>
  );
};

export default FAQ;
