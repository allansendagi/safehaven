import type { Metadata } from "next";
import { Inter, Montserrat, Open_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Font configurations with fallback
const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  fallback: ['system-ui', 'arial']
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
  fallback: ['system-ui', 'arial']
});

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  weight: ["400"],
  fallback: ['monospace', 'courier']
});

export const metadata: Metadata = {
  title: "Safehaven - Preparing Civilization for AI and Superintelligence",
  description: "Safehaven is dedicated to preparing civilization for the advent of artificial intelligence and superintelligence through collaborative governance, societal readiness, and global initiatives.",
  keywords: "AI, artificial intelligence, superintelligence, societal readiness, AI governance, AI TownSquare, global AI initiatives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${montserrat.variable} ${openSans.variable} ${robotoMono.variable}`}
    >
      <head>
        {/* Add font preload links */}
        <link 
          rel="preload" 
          href={montserrat.style.fontFamily} 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href={openSans.style.fontFamily} 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href={robotoMono.style.fontFamily} 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className={`${openSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
