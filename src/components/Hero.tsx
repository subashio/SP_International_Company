"use client";
import { Link } from "react-scroll";
import Collaburation from "./Collaburation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideRightAnimation } from "@/constants/amination";

export default function Hero() {
  return (
    <section className="mx-auto mt-14 w-full bg-[#ECF9FF]">
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
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
            Your Trusted Partner for Global Industrial Solutions
          </h1>

          <p className="mb-6 max-w-2xl font-light tracking-wide text-gray-900 md:text-lg lg:mb-8 lg:text-xl">
            delivers a wide range of pumps for Industrial, Domestic and
            Agriculture segments with below range of products
          </p>
          <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <Link
              offset={-100}
              to="/ProductsandServices"
              className="inline-flex w-full cursor-pointer justify-center rounded-lg border-2 border-transparent bg-[#23A0DA] px-5 py-3 text-center text-sm font-medium text-white shadow-xl transition duration-300 hover:border-[#23A0DA] hover:bg-white hover:text-black sm:w-auto"
            >
              Discover More
            </Link>

            <Link
              to="/Faq"
              offset={-100}
              className="mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-xl hover:bg-gray-100 hover:text-[#23A0DA] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              FAQ
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
          <img src="/pictures/hero.png" alt="Logo" />
        </motion.div>
      </MaxWidthWrapper>
      <Collaburation />
    </section>
  );
}
