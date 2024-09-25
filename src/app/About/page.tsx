import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCarousel from "./components/ProductCarousel";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, MoveRight } from "lucide-react";
import { list } from "@/constants/detailes";

export default function About() {
  return (
    <section>
      <div className="h-80 overflow-hidden bg-[url('/pictures/power.jpg')] bg-cover bg-left-bottom bg-no-repeat xl:h-96">
        <MaxWidthWrapper className="flex h-full flex-col items-center justify-center">
          <h1 className="mb-2 max-w-2xl text-5xl font-extrabold uppercase leading-none tracking-tight md:text-5xl xl:text-6xl">
            About us
          </h1>
          <p className="font-semibold text-[#ffffff]">
            Leading with Vision, Serving with Commitment
          </p>
        </MaxWidthWrapper>
      </div>
      <ul className="flex flex-wrap items-center justify-evenly gap-x-10 bg-[#D4F0FF] px-2.5 md:mx-auto md:h-16 md:flex-row">
        {list.map((item) => (
          <li className="my-2 flex items-center gap-2">
            <span>
              <img src="/icons/tick.svg" alt="tick" />
            </span>
            {item.name}
          </li>
        ))}
      </ul>
      <MaxWidthWrapper className="py-10">
        <p className="flex max-w-5xl flex-col gap-4 text-sm text-gray-500">
          At SUPREME & PIONEER — SP International Services (SP Co), we pride
          ourselves on being a global leader in providing comprehensive
          solutions for a wide range of industrial needs. With a diverse
          portfolio of products and services, we offer Pumps, Motors, Valves,
          Hydraulics, Pipes, Wires & Cables, Solar Pumping Systems, and more.
          Our solutions cater to various industries, including Chemical &
          Process, Power, Water & Waste Water, Oil & Gas, Pharma, Sugar &
          Distilleries, Paper & Pulp, Marine & Defence, Metal & Mining, Food &
          Beverage, and Petrochemical & Refineries. <br />{" "}
          <span>
            In addition to offering high-quality products, SP Group is committed
            to delivering top-tier industrial services. Our products and
            services are designed to meet the unique needs of sectors like
            Solar, Building, HVAC, Fire Fighting, Agriculture, and Residential,
            ensuring reliability, efficiency, and sustainability.
          </span>
          With a strong global presence and a focus on innovation, SP Co
          continues to drive excellence in the industrial solutions landscape,
          helping our clients achieve optimal performance across various
          applications.
        </p>
        <div className="my-10">
          <h1 className="max-w-2xl text-2xl font-extrabold uppercase leading-none tracking-tight md:text-3xl">
            OUR VISION, MISSION& VALUES
          </h1>

          <ul className="max-w-2xl list-disc text-gray-500">
            <li className="m-4 text-sm">
              To be the SINGLE POINT CONTACT LEADER by providing best services,
              Engineering management and solutions in our Global markets.
            </li>
            <li className="m-4 text-sm">
              SP aims to surpass the expectations of our customers by providing
              right solutionsto their critical problems at right price,
              withoutcompromising on the qualityof the services.
            </li>
            <li className="m-4 text-sm">
              We will deliver and achieve our success with our hard work and
              sincere commitment through our values of SUPREME & PIONEER.
            </li>
          </ul>
        </div>

        <h1 className="my-8 max-w-2xl text-2xl font-extrabold uppercase leading-none tracking-tight md:text-3xl">
          Our Products
        </h1>
        <div className="my-20 flex w-full flex-col items-center md:items-start">
          <ProductCarousel />
        </div>
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border border-[#23A0DA] px-4",
          )}
        >
          Explore More <MoveRight className="h-4 w-6" />
        </Link>
      </MaxWidthWrapper>
    </section>
  );
}
