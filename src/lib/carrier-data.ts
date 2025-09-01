
export interface Carrier {
    name: string;
    logo?: string;
    website: string;
    general: {
      phone: string;
    };
    claims: {
      phone: string;
      reportLink: string;
    };
    billing: {
      phone: string;
      payLink: string;
    };
  }
  
  export const personalCarriers: Carrier[] = [
      { 
        name: "American Integrity", 
        website: "#",
        general: { phone: "866-968-8390" },
        claims: { phone: "866-277-9871", reportLink: "#" },
        billing: { phone: "866-968-8390", payLink: "#" },
      },
      { 
        name: "Bristol West",
        website: "#",
        general: { phone: "888-888-0080" },
        claims: { phone: "800-274-7865", reportLink: "#" },
        billing: { phone: "888-888-0080", payLink: "#" },
      },
      { 
        name: "Citizens",
        website: "#",
        general: { phone: "866-411-2742" },
        claims: { phone: "866-411-2742", reportLink: "#" },
        billing: { phone: "866-411-2742", payLink: "#" },
       },
      { 
        name: "Foremost", 
        website: "#",
        general: { phone: "800-527-3905" },
        claims: { phone: "800-527-3907", reportLink: "#" },
        billing: { phone: "800-532-4221", payLink: "#" },
      },
      { 
        name: "Heritage Property & Casualty", 
        website: "#",
        general: { phone: "855-620-9978" },
        claims: { phone: "855-415-7120", reportLink: "#" },
        billing: { phone: "855-620-9978", payLink: "#" },
      },
      { 
        name: "Homeowners Choice", 
        website: "#",
        general: { phone: "866-324-3138" },
        claims: { phone: "866-324-3138", reportLink: "#" },
        billing: { phone: "866-324-3138", payLink: "#" },
      },
      { 
        name: "Infinity Insurance", 
        website: "#",
        general: { phone: "800-463-4648" },
        claims: { phone: "800-334-1661", reportLink: "#" },
        billing: { phone: "800-463-4648", payLink: "#" },
      },
      { 
        name: "Manatee Insurance", 
        website: "#",
        general: { phone: "941-746-1168" },
        claims: { phone: "941-746-1168", reportLink: "#" },
        billing: { phone: "941-746-1168", payLink: "#" },
      },
      { 
        name: "Monarch National", 
        website: "#",
        general: { phone: "800-293-2532" },
        claims: { phone: "800-293-2532", reportLink: "#" },
        billing: { phone: "800-293-2532", payLink: "#" },
      },
      { 
        name: "Progressive", 
        website: "#",
        general: { phone: "800-776-4737" },
        claims: { phone: "800-274-4499", reportLink: "#" },
        billing: { phone: "800-876-5581", payLink: "#" },
      },
      { 
        name: "Safepoint Insurance", 
        website: "#",
        general: { phone: "855-243-9740" },
        claims: { phone: "855-723-3764", reportLink: "#" },
        billing: { phone: "855-253-9740", payLink: "#" },
      },
      { 
        name: "Security First", 
        website: "#",
        general: { phone: "877-333-9992" },
        claims: { phone: "877-581-4862", reportLink: "#" },
        billing: { phone: "877-333-9992", payLink: "#" },
      },
      { 
        name: "Slide Insurance", 
        website: "#",
        general: { phone: "866-230-0063" },
        claims: { phone: "866-230-0063", reportLink: "#" },
        billing: { phone: "866-230-0063", payLink: "#" },
      },
      { 
        name: "Southern Oak", 
        website: "#",
        general: { phone: "877-900-3971" },
        claims: { phone: "877-900-3971", reportLink: "#" },
        billing: { phone: "877-900-3971", payLink: "#" },
      },
      { 
        name: "Universal Property", 
        website: "#",
        general: { phone: "800-470-0599" },
        claims: { phone: "800-470-0599", reportLink: "#" },
        billing: { phone: "800-470-0599", payLink: "#" },
      },
      { 
        name: "Wright National Flood", 
        website: "#",
        general: { phone: "866-373-5663" },
        claims: { phone: "800-725-9472", reportLink: "#" },
        billing: { phone: "866-373-5663", payLink: "#" },
      },
  ];
  
  export const commercialCarriers: Carrier[] = [
    { 
        name: "Bass Underwriters", 
        website: "#",
        general: { phone: "954-316-6556" },
        claims: { phone: "954-316-6556", reportLink: "#" },
        billing: { phone: "954-316-6556", payLink: "#" },
      },
      { 
        name: "BondExchange", 
        website: "#",
        general: { phone: "800-470-0599" },
        claims: { phone: "800-470-0599", reportLink: "#" },
        billing: { phone: "800-470-0599", payLink: "#" },
      },
      { 
        name: "Braishfield Assc.", 
        website: "#",
        general: { phone: "888-223-7717" },
        claims: { phone: "888-223-7717", reportLink: "#" },
        billing: { phone: "888-223-7717", payLink: "#" },
      },
      { 
        name: "Granda Insurance GIC", 
        website: "#",
        general: { phone: "305-267-7716" },
        claims: { phone: "305-267-7716", reportLink: "#" },
        billing: { phone: "305-267-7716", payLink: "#" },
      },
      { 
        name: "Hartford Flood", 
        website: "#",
        general: { phone: "800-787-8247" },
        claims: { phone: "800-787-8247", reportLink: "#" },
        billing: { phone: "800-787-8247", payLink: "#" },
      },
      { 
        name: "Heritage (Commerical)", 
        website: "#",
        general: { phone: "855-620-9978" },
        claims: { phone: "855-415-7120", reportLink: "#" },
        billing: { phone: "855-620-9978", payLink: "#" },
      },
      { 
        name: "Hull & Co", 
        website: "#",
        general: { phone: "954-523-2223" },
        claims: { phone: "954-523-2223", reportLink: "#" },
        billing: { phone: "954-523-2223", payLink: "#" },
      },
      { 
        name: "JIBNA", 
        website: "#",
        general: { phone: "877-542-6246" },
        claims: { phone: "877-542-6246", reportLink: "#" },
        billing: { phone: "877-542-62_6", payLink: "#" },
      },
      { 
        name: "Mac Neill Group", 
        website: "#",
        general: { phone: "954-331-4800" },
        claims: { phone: "954-331-4800", reportLink: "#" },
        billing: { phone: "954-331-4800", payLink: "#" },
      },
      { 
        name: "RPS (First Rate)", 
        website: "#",
        general: { phone: "727-449-9504" },
        claims: { phone: "727-449-9504", reportLink: "#" },
        billing: { phone: "727-449-9504", payLink: "#" },
      },
      { 
        name: "RT Specialty", 
        website: "#",
        general: { phone: "727-824-8111" },
        claims: { phone: "727-824-8111", reportLink: "#" },
        billing: { phone: "727-824-8111", payLink: "#" },
      },
  ];
