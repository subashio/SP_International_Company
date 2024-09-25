import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Collaburation from "./Collaburation";

export default function Hero() {
  return (
    <div className="mx-auto mt-14 w-full bg-[#ECF9FF]">
      <MaxWidthWrapper className="grid px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
            Your Trusted Partner for Global Industrial Solutions
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
            delivers a wide range of pumps for Industrial, Domestic and
            Agriculture segments with below range of products
          </p>
          <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <Link
              href="#"
              className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-[#23A0DA] px-5 py-3 text-center text-sm font-medium text-gray-900 hover:bg-[#9bd1eb] focus:ring-4 focus:ring-gray-100 sm:w-auto"
            >
              Discover more
            </Link>
            <Link
              href="#"
              className="mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              FAQ
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:col-span-5 lg:mt-0 lg:flex">
          <img src="/pictures/hero.png" alt="Logo" className="" />
        </div>
      </MaxWidthWrapper>
      <Collaburation />
    </div>
  );
}
