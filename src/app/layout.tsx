import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'A & E Insurance Group - Florida Insurance Agency | Naples & Fort Myers',
  description: 'Trusted Florida insurance agency serving Naples, Fort Myers & Southwest Florida. Auto, home, business & flood insurance. Licensed experts in Collier & Lee Counties. Free quotes.',
  keywords: 'Florida insurance agency, Naples insurance, Fort Myers insurance, auto insurance Florida, homeowners insurance Florida, business insurance, flood insurance',
  authors: [{ name: 'A & E Insurance Group' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aeinsurancefl.com/',
    title: 'A & E Insurance Group - Florida Insurance Agency',
    description: 'Trusted Florida insurance agency serving Naples, Fort Myers & Southwest Florida. Auto, home, business & flood insurance.',
    images: [{ url: 'https://aeinsurancefl.com/og-image.jpg' }],
    siteName: 'A & E Insurance Group',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://aeinsurancefl.com/',
    title: 'A & E Insurance Group - Florida Insurance Agency',
    description: 'Trusted Florida insurance agency serving Naples, Fort Myers & Southwest Florida. Auto, home, business & flood insurance.',
    images: ['https://aeinsurancefl.com/og-image.jpg'],
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Naples, Fort Myers, Florida',
    'geo.position': '26.1420;-81.7948',
    'ICBM': '26.1420, -81.7948',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#3498DB" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://aeinsurancefl.com/" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
