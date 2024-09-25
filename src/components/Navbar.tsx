import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import { Nav } from "@/constants/detailes";
import { buttonVariants } from "./ui/button";

export default function navbar() {
  return (
    <header className="fixed z-50 w-full bg-white">
      <MaxWidthWrapper className="mx-auto flex h-24 items-center justify-between">
        <Link className="flex items-center" href="/">
          <img src="/logos/logo.png" className="mr-3 h-8 sm:h-10" alt="Logo" />
          <span className="self-center whitespace-nowrap font-semibold dark:text-white sm:text-xl">
            SP INTERNATIONAL SERVICES
          </span>
        </Link>
        <nav className="ml-auto hidden items-center md:flex md:gap-4 md:text-sm lg:gap-8">
          {Nav.map((item: TNav) => (
            <>
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "font-semibold",
                  buttonVariants({ variant: "linkHover2", size: "xs" }),
                )}
              >
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
