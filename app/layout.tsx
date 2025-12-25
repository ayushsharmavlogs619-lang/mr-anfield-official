
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import StructuredData from "./components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr. Anfield — LFC News & Tactics",
  description: "The premium destination for Liverpool FC tactical analysis, transfer news, and fan culture.",
  metadataBase: new URL('https://mr-anfield.vercel.app'),
  keywords: ['Liverpool FC', 'LFC News', 'Football Tactics', 'Premier League', 'Transfer News', 'Match Analysis', 'Anfield'],
  authors: [{ name: 'Mr. Anfield' }],
  creator: 'Mr. Anfield',
  publisher: 'Mr. Anfield',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mr-anfield.vercel.app',
    title: 'Mr. Anfield — LFC News & Tactics',
    description: 'The premium destination for Liverpool FC tactical analysis, transfer news, and fan culture.',
    siteName: 'Mr. Anfield',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mr. Anfield - Liverpool FC News',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mr. Anfield — LFC News & Tactics',
    description: 'The premium destination for Liverpool FC tactical analysis, transfer news, and fan culture.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-site-verification-code',
  },
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
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={process.env.NEXT_PUBLIC_COOKIEBOT_ID}
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
