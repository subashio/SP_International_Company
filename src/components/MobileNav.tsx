"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Nav, Products, Services } from "@/constants/detailes";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";

export default function MobileNav() {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const router = useRouter();

  function handleClick(itemName: string, type: "Products" | "Services") {
    router.push(`/${type}/${encodeURIComponent(itemName)}`);
    setIsSheetOpen(false);
  }
  return (
    <>
      <Sheet
        open={isSheetOpen}
        onOpenChange={(isOpen) => setIsSheetOpen(isOpen)}
      >
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            aria-label="Open Menu"
            className="rounded-lg lg:hidden"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="py-12 lg:hidden">
          <nav className="flex flex-col items-center gap-2 font-sans text-2xl lg:hidden">
            <Accordion
              type="single"
              className="w-full !border-none"
              collapsible
            >
              <AccordionItem value="item-1" className="!border-none">
                <AccordionTrigger
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "mb-2 flex w-full items-center justify-center gap-1 !no-underline",
                  )}
                >
                  Products
                </AccordionTrigger>
                {Products.map((item) => (
                  <AccordionContent
                    key={item.id}
                    className="flex flex-row items-center justify-center"
                  >
                    <button
                      onClick={() => handleClick(item.name, "Products")}
                      className="my-1"
                    >
                      {item.name}
                    </button>
                  </AccordionContent>
                ))}
              </AccordionItem>
              <AccordionItem value="item-2" className="!border-none">
                <AccordionTrigger
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "flex w-full items-center justify-center gap-1 !no-underline",
                  )}
                >
                  Services
                </AccordionTrigger>
                {Services.map((item) => (
                  <AccordionContent
                    key={item.id}
                    className="flex flex-row items-center justify-center"
                  >
                    <button
                      onClick={() => handleClick(item.name, "Services")}
                      className="my-1"
                    >
                      {item.name}
                    </button>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>

            {Nav.map((item: TNav) => (
              <Link
                key={item.id}
                href={item.name ? item.href : "#"}
                onClick={() => setIsSheetOpen(false)}
                className={cn(buttonVariants({ variant: "ghost" }), "w-full")}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
