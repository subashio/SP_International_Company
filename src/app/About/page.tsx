import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { AboutCards, list } from "@/constants/detailes";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import ProductCarousel from "./components/ProductCarousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

export default function About() {
  return (
    <section>
      <ScrollProgressBar type="circle" color="#00AEFF" showPercentage={true} />
      <div className="flex h-80 flex-col items-center justify-center overflow-hidden bg-[url('/pictures/about1.png')] bg-cover bg-left-bottom bg-no-repeat text-[#ffffff] xl:h-96">
        <p className="font-semibold text-[#a1d9f3]">Trusted Worldwide</p>
        <h1 className="mb-2 max-w-2xl text-5xl font-bold uppercase leading-none tracking-wider md:text-7xl xl:text-8xl">
          About Us
        </h1>
      </div>
      <MaxWidthWrapper className="mt-20">
        <h1 className="max-w-6xl text-2xl font-bold leading-none tracking-tight md:text-4xl">
          Leading with Vision, Serving with Commitment
        </h1>
      </MaxWidthWrapper>
      <div className="py-10">
        <MaxWidthWrapper>
          <p className="flex max-w-6xl flex-col gap-4 text-gray-500 xl:text-[18px]">
            SUPREME & PIONEER — SP INTERNATIONAL SERVICES (SP Co) is a solution
            providers with a wide plobal presence and offers Pumps, Motors,
            Valves, Hydraulics, Pipes, Wires & Cables, and Solar Pumping Systems
            and Industrial services. SP Group has a diversified range of
            products in its portfolio and the products cater to diverse segments
            such as: Chemical & Process, Power, Water & Waste Water, Oil & Gas,
            Pharma, Sugar & Distilleries, Paper & Pulp, Marine & Defence, Metal
            & Mining, Food & Beverage, Petrochemical & Refineries, Solar,
            Building, HVAC, Fire Fighting, Agriculture & Residential
          </p>
        </MaxWidthWrapper>
      </div>

      <div className="mx-auto flex w-full flex-col justify-between bg-[#F6F6F6] md:py-20">
        <MaxWidthWrapper className="grid px-10 pb-10 lg:grid-cols-12 lg:gap-8 xl:gap-0">
          <div className="ml-0 lg:col-span-6 lg:place-self-center">
            <h1 className="text-2xl font-bold leading-none tracking-tight md:text-4xl">
              Our Vision, Mission & Values
            </h1>
            <ul className="mt-10 max-w-xl list-disc text-gray-500 xl:text-[18px]">
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
          </div>
          <div className="justify-center rounded-3xl lg:col-span-6 lg:mt-0 lg:flex xl:p-10">
            <img
              src="/pictures/about2.png"
              alt="about image"
              className="w-full md:w-[500px]"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="my-20 flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold leading-none tracking-tight md:text-4xl">
          Industrial & Energy Solutions
        </h1>
        <div className="my-10 flex max-w-7xl flex-wrap items-center justify-center gap-10 py-10 lg:justify-between lg:gap-10">
          {AboutCards.map((item) => (
            <Card className="max-w-xl cursor-pointer border-none p-6 transition-all duration-700 hover:bg-[#DDF5FF]">
              <img src={item.img} alt="logo" className="h-10" />
              <CardTitle className="my-4">{item.name}</CardTitle>
              <CardDescription className="max-w-sm text-gray-500 xl:max-w-xl">
                {item.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-[#F2F4F6] py-10">
        <MaxWidthWrapper>
          <h1 className="max-w-2xl text-2xl font-bold leading-none tracking-tight md:text-4xl">
            Our Products
          </h1>
          <div className="my-20 flex w-full flex-col items-center md:items-start">
            <ProductCarousel />
          </div>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border border-[#00AEFF] px-4",
            )}
          >
            Explore More <MoveRight className="h-4 w-6" />
          </Link>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
