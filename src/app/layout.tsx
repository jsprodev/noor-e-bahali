import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Noor-E-Bahali Foundation",
    description: "SECP-registered NGO providing rehabilitation and humanitarian support",
    url: "https://noorebahali.org",
    logo: "https://noorebahali.org/logo.png",
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+92-317-3358335",
      email: "noorebahali@gmail.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-17",
      addressLocality: "Islamabad",
      postalCode: "44000",
      addressCountry: "PK",
    },
    sameAs: ["https://facebook.com/noorebahali", "https://instagram.com/noorebahali", "https://x.com/noorebahali"],
  };
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Noor-E-Bahali Foundation | Social Welfare & Rehabilitation NGO Pakistan",
  description:
    "SECP-registered NGO providing therapy, rehabilitation, and humanitarian support for special needs children across Pakistan. Empowering abilities, transforming lives.",
  keywords: "NGO Pakistan, special needs children, rehabilitation, therapy, humanitarian support, SECP registered",
  authors: [{ name: "Noor-E-Bahali Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noorebahali.org",
    siteName: "Noor-E-Bahali Foundation",
    title: "Noor-E-Bahali Foundation | Social Welfare & Rehabilitation NGO",
    description: "Empowering special needs children and vulnerable families across Pakistan",
    images: [
      {
        url: "https://noorebahali.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noor-E-Bahali Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor-E-Bahali Foundation",
    description: "Social welfare and rehabilitation for special needs children",
    images: ["https://noorebahali.org/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://noorebahali.org",
  },
};
