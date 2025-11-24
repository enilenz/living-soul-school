import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";




export const metadata: Metadata= {
  title: "Living Soul School – Lagos, Nigeria",
  description: "Best school in Lagos offering top education and modern facilities.",
  keywords: [
    "School in Lagos",
    "Top Lagos school",
    "Private school Nigeria",
    "Nursery, Primary, Secondary",
    "Living Soul",
    "Living Soul Schools",
    "Soul Schools",
    "Living Schools"
  ],
  alternates: { canonical: 'https://livingsoulschools.com' },
  metadataBase: new URL("https://livingsoulschools.com"),
  openGraph: {
    title: "Living Soul Schools",
    description: "A modern school in Lagos with quality education.",
    url: "https://livingsoulschools.com",
    type: "website",
    images: [
      {
        url: "/LandingImage.jpg",
        width: 1200,
        height: 630,
        alt: "Living Soul Schools - Lagos",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Living Soul Schools",
    description: "Top private school in Lagos.",
    images: ["/LandingImage.jpg"],
  },
 other: {
   
    "Content-Security-Policy":
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://www.gstatic.com https://www.google.com; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https: blob:; " +
      "font-src 'self' data:; " +
      "connect-src 'self' https:; " +
      "frame-src https:; " +
      "media-src 'self' blob: data:; " +
      "object-src 'none'; ",

  
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Strict-Transport-Security":
      "max-age=31536000; includeSubDomains; preload",
    "Permissions-Policy":
      "camera=(), microphone=(), geolocation=(), payment=()",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
   
      </body>
    </html>
  );
}
