import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const fontSans = FontSans({
  weight: ["300", "400", "500", "700", "900", "200"],
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});
export const metadata: Metadata = {
  title: "SP International Services ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full !scroll-smooth">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main className="relative flex min-h-screen flex-col bg-cover bg-no-repeat">
          <Navbar />

          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
