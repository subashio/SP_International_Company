"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export default function MobileNav() {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const Nav: TNav[] = [
    { id: 1, name: "About", href: "#" },
    { id: 1, name: "Services", href: "#" },
    { id: 1, name: "Products", href: "#" },
    { id: 1, name: "Contact", href: "#" },
    { id: 1, name: "FAQ", href: "#" },
  ];

  return (
    <div className="">
      <Sheet
        open={isSheetOpen}
        onOpenChange={(isOpen) => setIsSheetOpen(isOpen)}
      >
        <SheetTrigger asChild>
          <Button variant="ghost" className="rounded-lg md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="py-12 md:hidden">
          <div className="flex flex-col items-center gap-2 font-sans text-2xl md:hidden">
            {Nav.map((item: TNav) => (
              <>
                <Link
                  onClick={() => setIsSheetOpen(false)}
                  key={item.id}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
