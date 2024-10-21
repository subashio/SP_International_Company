"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import { ServicesDetails } from "@/constants/ServicesData";
import { container, listItem, opacityAnimation } from "@/constants/amination";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ImageCard from "../../../components/ImageCard";
import Points from "../../../components/Points";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const Services = ServicesDetails.find(
    (item) => decodeURIComponent(item.title) === decodeURIComponent(id),
  );
  if (!Services) {
    return <p>Services not found {decodeURIComponent(id)}</p>;
  }
  return (
    <section className="overflow-hidde" key={Services.id}>
      <ScrollProgressBar type="circle" color="#00AEFF" showPercentage={true} />

      <div
        className="n relative flex h-60 flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-[#ffffff] xl:h-96"
        style={{ backgroundImage: `url(${Services.img})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#11111191]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111a1]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#11111191]"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111111a1]"></div>
        <motion.p
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-semibold text-sky-300"
        >
          Trusted Worldwide
        </motion.p>
        <motion.h1
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={cn(
            "z-10 mb-2 border-l-4 border-sky-400 pl-2 font-bold uppercase leading-none tracking-wider",
            Services.className,
          )}
        >
          {Services.title}
        </motion.h1>
        <motion.p
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-semibold"
        >
          Services
        </motion.p>
      </div>
      <MaxWidthWrapper>
        <motion.p
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex max-w-5xl flex-col gap-4 py-10 text-gray-900 xl:text-[18px]"
        >
          {Services.description}
        </motion.p>
        <Points title={Services.subTitles[0]} points={Services.points} />
        <Points title={Services.subTitles[1]} points={Services.points2} />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="text-center">
        {Services.title !== "Environment Services" &&
          Services.title !== "Refiners Oil & Gas" &&
          Services.title !== "Water & Waste Water" && (
            <ImageCard imgArray={Services.imgArray} Details={Services} />
          )}
        {(Services.title === "Environment Services" ||
          Services.title === "Refiners Oil & Gas" ||
          Services.title === "Water & Waste Water") && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-8 lg:w-1/2 lg:grid-cols-12 lg:place-self-start xl:flex xl:w-1/2 xl:justify-start"
          >
            {Services.imgArray.map((img, index) => (
              <motion.img
                key={index}
                variants={listItem}
                src={img.img}
                alt="environment"
                className="w-full shadow-xl"
              />
            ))}
          </motion.div>
        )}
      </MaxWidthWrapper>
    </section>
  );
}
