"use client";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInAnimation } from "@/constants/amination";
import { motion } from "framer-motion";

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
                className="group flex h-[400px] w-full cursor-pointer flex-col items-center justify-around p-4 transition-all duration-700 hover:border hover:border-[#23A0DA] sm:w-auto md:w-[350px] lg:w-auto"
              >
                <CardContent className="flex w-96 items-center justify-center">
                  <img
                    src={item.img}
                    className="relative h-[200px] w-[200px] object-contain transition-all duration-700 group-hover:scale-110"
                    alt={`product-image-${index}`}
                  />
                  <img
                    className="absolute right-0 w-20"
                    src={item.logo}
                    alt=""
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
                  <img
                    src={item.img}
                    className="transition-all duration-700 group-hover:scale-110"
                    alt={`product-image-${index}`}
                  />
                  {/* <img
              className="absolute right-2 top-2 w-14 transition-all duration-700 group-hover:scale-50"
              src={item.logo}
              alt=""
            />
            <p className="absolute right-2.5 top-16 text-sm transition-all duration-700 group-hover:-translate-y-4 group-hover:scale-50">
              Scan QR
            </p> */}
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
