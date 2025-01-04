"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import {
  fadeInAnimation,
  opacityAnimation,
  slideLeftAnimation,
  slideRightAnimation,
  slideupAnimation,
} from "@/constants/amination";
import { AboutCards } from "@/constants/detailes";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import ProductCarousel from "./components/ProductCarousel";

export default function About() {
  return (
    <section className="overflow-hidden">
      <ScrollProgressBar type="circle" color="#00AEFF" showPercentage={true} />
      <div className="flex h-80 flex-col items-center justify-center bg-[url('/pictures/background/about.webp')] bg-cover bg-left-bottom bg-no-repeat text-[#ffffff] xl:h-96">
        <motion.p
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-semibold text-[#a1d9f3]"
        >
          Trusted Worldwide
        </motion.p>
        <motion.h1
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-2 max-w-2xl text-5xl font-bold uppercase leading-none tracking-wider md:text-7xl xl:text-8xl"
        >
          About Us
        </motion.h1>
      </div>
      <MaxWidthWrapper className="my-10">
        <motion.h1
          variants={slideupAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl text-2xl font-bold leading-none tracking-tight md:text-4xl"
        >
          Leading with Vision, Serving with Commitment
        </motion.h1>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <motion.p
          variants={slideupAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16 flex max-w-6xl flex-col gap-4 text-gray-500 xl:text-[18px]"
        >
          SUPREME & PIONEER — SP INTERNATIONAL SERVICES (SP Co) is a solution
          providers with a wide plobal presence and offers Pumps, Motors,
          Valves, Hydraulics, Pipes, Wires & Cables, and Solar Pumping Systems
          and Industrial services. SP Group has a diversified range of products
          in its portfolio and the products cater to diverse segments such as:
          Chemical & Process, Power, Water & Waste Water, Oil & Gas, Pharma,
          Sugar & Distilleries, Paper & Pulp, Marine & Defence, Metal & Mining,
          Food & Beverage, Petrochemical & Refineries, Solar, Building, HVAC,
          Fire Fighting, Agriculture & Residential
        </motion.p>
      </MaxWidthWrapper>

      <div className="mx-auto flex w-full flex-col justify-between bg-[#F6F6F6] py-16">
        <MaxWidthWrapper className="xl:place-content-auto grid gap-10 px-10 pb-10 lg:grid-cols-12 lg:gap-8 xl:gap-0">
          <motion.div
            variants={slideLeftAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="ml-0 lg:col-span-6 lg:place-self-center"
          >
            <h1 className="text-2xl font-bold leading-none tracking-tight md:text-4xl">
              Our Vision, Mission & Values
            </h1>
            <ul className="mt-10 max-w-3xl list-disc text-gray-500 md:text-[18px]">
              <li className="m-6">
                To be the SINGLE POINT CONTACT LEADER by providing best
                services, Engineering management and solutions in our Global
                markets.
              </li>
              <li className="m-6">
                SP aims to surpass the expectations of our customers by
                providing right solutionsto their critical problems at right
                price, withoutcompromising on the qualityof the services.
              </li>

              <li className="m-6">
                We will deliver and achieve our success with our hard work and
                sincere commitment through our values of SUPREME & PIONEER.
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={slideRightAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="justify-center rounded-3xl lg:col-span-6 lg:mt-0 lg:flex xl:p-10"
          >
            <img
              src="/pictures/about2.png"
              alt="about image"
              className="w-full lg:w-[500px]"
            />
          </motion.div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="my-20 flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold leading-none tracking-tight md:text-4xl">
          Industrial & Energy Solutions
        </h1>
        <ul className="my-10 flex max-w-7xl flex-wrap items-center justify-center gap-10 py-10 lg:gap-10 xl:justify-between">
          {AboutCards.map((item, index) => (
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
              <Card className="max-w-xl cursor-pointer rounded-3xl p-10 text-card-foreground transition-all duration-300 hover:bg-[#DDF5FF] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <img
                  src={item.img}
                  alt="SP Internationali logo image"
                  className="h-10"
                />
                <CardTitle className="my-4">{item.name}</CardTitle>
                <CardDescription className="max-w-sm text-gray-500 xl:max-w-xl">
                  {item.description}
                </CardDescription>
              </Card>
            </motion.li>
          ))}
        </ul>
      </MaxWidthWrapper>

      <div className="bg-[#F2F4F6] py-20">
        <MaxWidthWrapper className="flex flex-col items-center justify-center">
          <motion.h1
            variants={opacityAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="my-10 w-full text-center text-2xl font-bold leading-none tracking-tight md:text-4xl"
          >
            Our Products Line
          </motion.h1>
          <div className="my-10 flex w-full flex-col items-center">
            <ProductCarousel />
          </div>
          <Link
            href="/Products/Pumps"
            className="group inline-flex w-full items-center justify-center rounded-lg border-2 border-transparent bg-sky-450 px-5 py-3 text-center text-sm font-medium text-primary-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:border-sky-450 hover:bg-white hover:text-black sm:w-auto"
          >
            Explore More
            <MoveRight className="ml-2 h-4 w-6 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
