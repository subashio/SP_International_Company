"use client";
import { fadeInAnimation } from "@/constants/amination";
import { card } from "@/constants/detailes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";

export default function ServicesAndProducts() {
  return (
    <section
      id="ProductsandServices"
      className="scroll-mt-20 bg-gray-50 bg-fixed py-20"
    >
      <MaxWidthWrapper className="text-center">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-sky-400">Trusted Worldwide</p>
          <h1 className="mb-20 text-4xl font-bold leading-none tracking-tight md:text-5xl">
            Products & Services
          </h1>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-8">
          {card.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {item.type === "Product" && (
                <Link
                  href={`/Products/${encodeURIComponent(item.name)}`}
                  key={item.id}
                >
                  <Card className="flex h-44 w-64 flex-col items-center justify-around text-card-foreground shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-all duration-300 hover:scale-105 hover:border-sky-500">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={100}
                      height={100}
                      className={cn("h-auto w-auto", item.className)}
                    />

                    <p className="">{item.name}</p>
                  </Card>
                </Link>
              )}
              {item.type === "Services" && (
                <Link
                  href={`/Services/${encodeURIComponent(item.name)}`}
                  key={item.id}
                >
                  <Card className="flex h-44 w-64 flex-col items-center justify-around text-card-foreground shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-all duration-300 hover:scale-105 hover:border-sky-500">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="h-auto w-[100px]"
                    />

                    <p className="">{item.name}</p>
                  </Card>
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </section>
  );
}
