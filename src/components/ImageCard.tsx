"use client";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInAnimation } from "@/constants/amination";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageCard({ imgArray, Details }: ProductImageProps) {
  return (
    <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 md:justify-start">
      {Details?.title !== "tormacpumps" && (
        <>
          {imgArray.map((item, index) => (
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
              <Card
                key={index}
                className="group flex h-[400px] w-full cursor-pointer flex-col items-center justify-around p-4 transition-all duration-700 hover:border hover:border-[#23A0DA] sm:w-auto md:w-[400px] lg:w-auto"
              >
                <CardContent className="flex w-96 items-center justify-center">
                  <Image
                    width={200}
                    height={200}
                    src={item.img}
                    className={cn(
                      "relative h-auto w-auto object-contain transition-all duration-700 group-hover:scale-110",
                      item.className,
                    )}
                    alt={`product-image-${index}`}
                  />
                </CardContent>

                <p className="max-w-[250px] text-[16px] font-semibold uppercase text-[#23A0DA]">
                  {item.name}
                </p>
              </Card>
            </motion.li>
          ))}
        </>
      )}
      {Details?.title === "tormacpumps" && (
        <>
          {imgArray.map((item, index) => (
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
              <Card
                key={index}
                className="group relative flex h-[400px] w-full cursor-pointer flex-col items-center justify-around p-4 transition-all duration-700 hover:border hover:border-[#23A0DA] sm:w-auto md:w-[350px] lg:w-auto"
              >
                <CardContent className="flex w-96 flex-col items-center justify-center">
                  <Image
                    width={120}
                    height={100}
                    src={item.img}
                    className={cn(
                      "h-auto w-auto transition-all duration-700 group-hover:scale-110",
                      item.className,
                    )}
                    alt={`product-image-${index}`}
                  />
                </CardContent>

                <div className="flex flex-col items-center justify-around">
                  <h1 className="max-w-[250px] text-[16px] font-semibold uppercase text-[#23A0DA]">
                    {item.name}
                  </h1>
                </div>
              </Card>
            </motion.li>
          ))}
        </>
      )}
    </ul>
  );
}
