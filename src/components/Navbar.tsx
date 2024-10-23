"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { slideLeftAnimation, slideRightAnimation } from "@/constants/amination";
import { Nav, Products, Services } from "@/constants/detailes";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ListItem } from "./ListItem";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const router = useRouter();
  function handleClick(itemName: string, type: "Products" | "Services") {
    router.push(`/${type}/${encodeURIComponent(itemName)}`);
  }
  return (
    <header className="fixed z-50 w-full bg-white">
      <MaxWidthWrapper className="mx-auto flex h-24 items-center justify-between">
        <Link className="flex items-center" href="/">
          <motion.div
            variants={slideLeftAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="flex items-center"
          >
            <img
              src="/logos/logo.png"
              className="mr-3 h-8 sm:h-10"
              alt="SP International Services logo"
            />

            <span className="self-center whitespace-nowrap font-semibold dark:text-white sm:text-xl">
              SP INTERNATIONAL SERVICES
            </span>
          </motion.div>
        </Link>
        <motion.nav
          variants={slideRightAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="ml-auto hidden items-center md:text-sm lg:flex lg:gap-8"
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-y-3 p-4 xl:w-[400px] xl:grid-cols-2">
                    {Products.map((item) => (
                      <ListItem
                        key={item.id}
                        title={item.name}
                        href={`/Products/${item.name}`}
                        handleClick={() => handleClick(item.name, "Products")}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-y-3 p-4 xl:w-[350px] xl:grid-cols-2">
                    {Services.map((item) => (
                      <ListItem
                        key={item.id}
                        title={item.name}
                        href={`/Services/${item.name}`}
                        handleClick={() => handleClick(item.name, "Services")}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {Nav.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </motion.nav>
        <MobileNav />
      </MaxWidthWrapper>
    </header>
  );
}
