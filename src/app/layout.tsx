import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { CartProvider } from "./context/cartcontext";
import { WishlistProvider } from "./context/wishlistcontext";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comforty",
  description: "Comforty is your go-to solution for comfortable and affordable home products. We offer a wide range of products designed to enhance your comfort at home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          <WishlistProvider>
            <CartProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </CartProvider>
          </WishlistProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}


