import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  weight: ["300", "400", "500", "700", "900", "200"],
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});
export const metadata: Metadata = {
  title: "SP International Services ",
  description:
    "SUPREME & PIONEER — SP INTERNATIONAL SERVICES (SP Co) is a solution providers with a wide plobal presence and offers Pumps, Motors, Valves, Hydraulics, Pipes, Wires & Cables, and Solar Pumping Systems and Industrial services. SP Group has a diversified range of products in its portfolio and the products cater to diverse segments such as: Chemical & Process, Power, Water & Waste Water, Oil & Gas, Pharma, Sugar & Distilleries, Paper & Pulp, Marine & Defence, Metal & Mining, Food & Beverage, Petrochemical & Refineries, Solar, Building, HVAC, Fire Fighting, Agriculture & Residential",
  authors: [{ name: "Subash", url: "Git_hub" }],
  keywords: "",
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

          <Toaster />
          <Footer />
        </main>
      </body>
    </html>
  );
}
