import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://vowandplay.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vow & Play | Wedding Childcare in Cache Valley, Utah",
  description:
    "On-site babysitting, kids activities, and bounce house rentals for weddings in Cache Valley. Let the kids play while you celebrate. Serving Logan, Smithfield, Hyde Park, Providence & more.",
  keywords: [
    "wedding childcare Cache Valley",
    "wedding babysitting Logan Utah",
    "childcare for weddings Utah",
    "kids activities for weddings Cache Valley",
    "bounce house wedding rental Cache Valley",
    "wedding babysitter Logan",
    "Cache Valley wedding services",
    "on-site childcare weddings Utah",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vow & Play | Wedding Childcare in Cache Valley",
    description:
      "On-site babysitting, kids activities, and bounce house rentals for weddings in Cache Valley, Utah.",
    url: SITE_URL,
    siteName: "Vow & Play",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vow & Play | Wedding Childcare in Cache Valley",
    description:
      "On-site babysitting, kids activities, and bounce house rentals for weddings in Cache Valley, Utah.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  category: "Wedding Services",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: "Vow & Play",
  description:
    "Wedding childcare in Cache Valley, Utah. On-site babysitting, kids activities, and bounce house rentals so guests with kids can fully enjoy your wedding.",
  url: SITE_URL,
  email: "hello@vowandplay.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "UT",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Place", name: "Cache Valley, Utah" },
    { "@type": "City", name: "Logan, UT" },
    { "@type": "City", name: "North Logan, UT" },
    { "@type": "City", name: "Hyde Park, UT" },
    { "@type": "City", name: "Smithfield, UT" },
    { "@type": "City", name: "Providence, UT" },
    { "@type": "City", name: "Hyrum, UT" },
    { "@type": "City", name: "Nibley, UT" },
    { "@type": "City", name: "River Heights, UT" },
    { "@type": "City", name: "Wellsville, UT" },
    { "@type": "City", name: "Mendon, UT" },
    { "@type": "City", name: "Richmond, UT" },
    { "@type": "City", name: "Lewiston, UT" },
  ],
  knowsAbout: [
    "Wedding childcare",
    "On-site babysitting",
    "Kids activities",
    "Bounce house rentals",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Childcare Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sweet & Simple",
          description: "Up to 3 hours of care for ceremony or reception coverage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "The Full Celebration",
          description: "Up to 6 hours of care with full activity station setup.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "The Grand Party",
          description:
            "Full-day coverage with premium activity stations and bounce house.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
