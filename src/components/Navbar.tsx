import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

export default function navbar() {
  const Nav: TNav[] = [
    { id: 1, name: "About", href: "#" },
    { id: 1, name: "Services", href: "#" },
    { id: 1, name: "Products", href: "#" },
    { id: 1, name: "FAQ", href: "#" },
    { id: 1, name: "Contact", href: "#" },
  ];

  return (
    <header className="fixed z-50 w-full bg-white">
      <MaxWidthWrapper className="mx-auto flex h-24 items-center justify-between">
        <Link className="flex items-center" href="/">
          <img src="/logo.png" className="mr-3 h-8 sm:h-10" alt="Logo" />
          <span className="self-center whitespace-nowrap font-semibold sm:text-xl dark:text-white">
            SP INTERNATIONAL SERVICES
          </span>
        </Link>
        <nav className="ml-auto hidden items-center md:gap-5 lg:flex lg:gap-8">
          {Nav.map((item: TNav) => (
            <>
              <Link key={item.id} href={item.href} className="font-semibold">
                {item.name}
              </Link>
            </>
          ))}
        </nav>
        <MobileNav />
      </MaxWidthWrapper>
    </header>
  );
}
