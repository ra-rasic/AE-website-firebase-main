
import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "A & E Insurance Group | Bonita Springs FL Insurance Agency",
  description:
    "Local Florida insurance since 2002. Home, auto, flood & business coverage in Collier & Lee counties. Call 239-591-1225 for a fast quote.",
  generator: "v0.app",
  keywords:
    "Florida insurance, Bonita Springs insurance, Naples insurance, Fort Myers insurance, homeowners insurance Florida, auto insurance Florida, flood insurance, business insurance, hurricane insurance",
  authors: [{ name: "A & E Insurance Group" }],
  creator: "A & E Insurance Group",
  publisher: "A & E Insurance Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aeinsurancegroup.com",
    siteName: "A & E Insurance Group",
    title: "A & E Insurance Group | Southwest Florida Insurance Experts",
    description:
      "Local Florida insurance since 2002. Home, auto, flood & business coverage in Collier & Lee counties. Call 239-591-1225 for a fast quote.",
    images: [
      {
        url: "https://aeinsurancegroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A & E Insurance Group - Southwest Florida Insurance Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A & E Insurance Group | Southwest Florida Insurance Experts",
    description: "Local Florida insurance since 2002. Home, auto, flood & business coverage in Collier & Lee counties.",
    images: ["https://aeinsurancegroup.com/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${dmSans.variable} ${GeistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
