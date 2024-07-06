import "./globals.css";

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Inter } from "next/font/google";
import type { Metadata } from "next";

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
        <link rel="icon" href="https://res.cloudinary.com/dbnxbly1r/image/upload/v1720269412/timbu-shop/Group_1171275219_d4mkt4.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
