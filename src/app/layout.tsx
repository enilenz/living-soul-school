import type { Metadata } from "next";
// import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterScrollHandler from "@/components/FooterScrollHandler";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const inter = Inter({
//   subsets: ["latin"]
// })

// export const metadata: Metadata = {
//   title: "Living Soul School",
//   description: "Living Soul School",
// };

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
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Living Soul Schools",
    description: "A modern school in Lagos with quality education.",
    url: "https://yourdomain.com",
    type: "website",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //   }
    // ]
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Your School Name",
  //   description: "Top private school in Lagos.",
  //   images: ["/og-image.jpg"],
  // }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      {/* <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`} className={inter.className}
         
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body> */}
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <FooterScrollHandler /> */}
      </body>
    </html>
  );
}
