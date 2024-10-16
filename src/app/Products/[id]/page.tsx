"use client";
import Collaburation from "@/components/Collaburation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import { ProductDetails } from "@/constants/PrdouctData";
import { cn } from "@/lib/utils";
import ImageCard from "../../../components/ImageCard";
import Points from "../../../components/Points";
import { motion } from "framer-motion";
import { slidedownAnimation, slideupAnimation } from "@/constants/amination";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const product = ProductDetails.find(
    (item) => decodeURIComponent(item.title) === decodeURIComponent(id),
  );
  if (!product) {
    return <p>Product not found: {decodeURIComponent(id)}</p>;
  }

  return (
    <section key={product.id}>
      <ScrollProgressBar type="circle" color="#00AEFF" showPercentage={true} />

      <div
        className="relative flex h-60 flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-[#ffffff] xl:h-96"
        style={{ backgroundImage: `url(${product.img})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#11111191]"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111111a1]"></div>
        <motion.p
          variants={slidedownAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="z-10 font-semibold text-[#a1d9f3]"
        >
          Trusted Worldwide
        </motion.p>
        <motion.h1
          variants={slidedownAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={cn(
            "z-10 mb-2 font-bold uppercase leading-none tracking-wider",
            product.className,
          )}
        >
          {product.title}
        </motion.h1>
        <motion.p
          variants={slidedownAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Products{" "}
        </motion.p>
      </div>
      {id == "Pumps" && <Collaburation />}
      <MaxWidthWrapper>
        <motion.p
          variants={slideupAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex max-w-5xl flex-col gap-4 py-10 text-gray-900 xl:text-[18px]"
        >
          {product.description}
        </motion.p>
        <Points title={product.subTitles[0]} points={product.points} />
        <Points title={product.subTitles[1]} points={product.points2} />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="text-center">
        <ImageCard imgArray={product.imgArray} Details={product} />
      </MaxWidthWrapper>
    </section>
  );
}
