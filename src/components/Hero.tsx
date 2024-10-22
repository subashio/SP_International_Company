"use client";
import { slideLeftAnimation, slideRightAnimation } from "@/constants/amination";
import { motion } from "framer-motion";
import Image from "next/image";
// import { Link } from "react-scroll";
import Collaburation from "./Collaburation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto mt-14 w-full bg-sky-50">
      <MaxWidthWrapper className="mb-20 grid px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
        <motion.div
          variants={slideLeftAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="mr-auto place-self-center lg:col-span-7"
        >
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-start xl:text-6xl">
            Your Trusted Partner for Global Industrial Solutions
          </h1>

          <p className="mb-6 max-w-2xl font-light tracking-wide text-gray-900 md:text-lg lg:mb-8 lg:text-start lg:text-xl">
            Delivers a wide range of pumps for Industrial, Domestic and
            Agriculture segments with below range of products
          </p>
          <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0 lg:place-content-start">
            <Link
              href="#ProductsandServices"
              className="inline-flex w-full cursor-pointer justify-center rounded-lg border-2 border-transparent bg-sky-450 px-5 py-3 text-center text-sm font-medium text-primary-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-500 hover:border-sky-450 hover:bg-white hover:text-black sm:w-auto"
            >
              Discover More
            </Link>

            <Link
              href="#about"
              className="mb-2 mr-2 inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 border-transparent bg-white px-5 py-3 text-sm font-medium text-secondary-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 hover:border-sky-200 hover:text-sky-450 sm:w-auto"
            >
              About us
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={slideRightAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="mt-10 lg:col-span-5 lg:mt-0 lg:flex"
        >
          <Image
            width={600}
            height={200}
            className="h-auto w-auto rounded-3xl md:shadow-[-16px_-16px_4px_2px_#00000049]"
            src="/pictures/background/hero1.png"
            alt="Logo"
          />
        </motion.div>
      </MaxWidthWrapper>
      <Collaburation />
    </section>
  );
}
