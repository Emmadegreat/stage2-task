import "./globals.css";

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timbu-Store",
  description: "Timbu-Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dbnxbly1r/image/upload/v1720404219/timbu-shop/logo_appxjg.jpg" />
      </head>
      <body className={inter.className}>
        <Providers>
        <Header />
        {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
