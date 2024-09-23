import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";

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
        </main>
      </body>
    </html>
  );
}
