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

export const metadata: Metadata = {
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
  openGraph: {
    title: "Vow & Play | Wedding Childcare in Cache Valley",
    description:
      "On-site babysitting, kids activities, and bounce house rentals for weddings in Cache Valley, Utah.",
    type: "website",
    locale: "en_US",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
