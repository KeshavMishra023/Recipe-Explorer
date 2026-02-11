import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { FavouriteProvider } from "@/context/FavouriteContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recipe App | Climbax Task",
  description: "Recipe application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <CartProvider>
          <FavouriteProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </FavouriteProvider>
        </CartProvider>
      </body>
    </html>
  );
}
