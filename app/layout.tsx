
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import StructuredData from "./components/StructuredData";
import NewsletterPopup from "./components/NewsletterPopup";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Mr. Anfield Football — LFC News & Tactics",
  description: "The premium destination for Liverpool FC tactical analysis, transfer news, and fan culture.",
  metadataBase: new URL('https://mr-anfield.vercel.app'),
  keywords: ['Liverpool FC', 'LFC News', 'Football Tactics', 'Premier League', 'Transfer News', 'Match Analysis', 'Anfield', 'Mr. Anfield Football'],
  authors: [{ name: 'Mr. Anfield Football' }],
  creator: 'Mr. Anfield Football',
  publisher: 'Mr. Anfield Football',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mr-anfield.vercel.app',
    title: 'Mr. Anfield Football — LFC News & Tactics',
    description: 'The premium destination for Liverpool FC tactical analysis, transfer news, and fan culture.',
    siteName: 'Mr. Anfield Football',
    images: [
      {
        url: '/stadium.png',
        width: 1200,
        height: 630,
        alt: 'Mr. Anfield Football - Liverpool FC News',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mr. Anfield Football — LFC News & Tactics',
    description: 'The premium destination for Liverpool FC tactical analysis, transfer news, and fan culture.',
    images: ['/stadium.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Google Search Console verification - add when ready
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cookiebot CMP - MUST LOAD FIRST for GDPR compliance */}
        <link rel="manifest" href="/manifest.json" />
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className} antialiased`}>
        <Analytics />
        <CookieConsent />
        <Navbar />
        {children}
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  );
}
