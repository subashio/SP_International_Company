"use client";
import { fadeInAnimation } from "@/constants/amination";
import { card } from "@/constants/detailes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";

export default function ServicesAndProducts() {
  return (
    <section id="/ProductsandServices" className="bg-gray-50 bg-fixed py-20">
      <MaxWidthWrapper className="text-center">
        <div className="flex flex-col gap-3">
          <p className="text-sky-350 font-semibold">Trusted Worldwide</p>
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
                  <Card className="flex h-44 w-64 flex-col items-center justify-around shadow-xl transition-all duration-300 hover:scale-105 hover:border-sky-500">
                    <Image
                      width={100}
                      height={100}
                      src={item.src}
                      alt="image"
                      className={item.style}
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
                  <Card className="flex h-44 w-64 flex-col items-center justify-around shadow-xl transition-all duration-300 hover:scale-105 hover:border-sky-500">
                    <Image
                      width={100}
                      height={100}
                      src={item.src}
                      alt="image"
                      className={item.style}
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
