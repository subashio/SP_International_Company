import { list } from "@/constants/detailes";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRightIcon, MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <div className="py-24">
      <MaxWidthWrapper className="mb-10 flex flex-col items-center gap-4 text-center">
        <h1 className="mb-2 max-w-4xl text-4xl font-bold leading-none tracking-tight md:text-5xl">
          Leading with Vision, Serving with Commitment
        </h1>
        <p className="mb-2 max-w-4xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
          At SP Group, we pride ourselves on our wide global presence, offering
          a comprehensive range of products and services, including Pumps,
          Motors, Valves, Hydraulics, Pipes, Wires & Cables, Solar Pumping
          Systems, and Industrial Services.
        </p>
        <Link
          href="/About"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "group border bg-[#00aeff] px-4 text-white transition-all duration-700 hover:bg-[#3ec2ff]",
          )}
        >
          Known More
          <MoveRight className="ml-2 h-4 w-6 transition-all duration-500 group-hover:translate-x-2" />
        </Link>
      </MaxWidthWrapper>
      <ul className="flex flex-wrap items-center justify-evenly gap-x-10 bg-[#D4F0FF] px-2.5 text-primary-foreground md:mx-auto md:h-16 md:flex-row">
        {list.map((item) => (
          <li className="my-2 flex items-center gap-2">
            <span>
              <img src="/icons/tick.svg" alt="tick" />
            </span>
            {item.name}
          </li>
        ))}
      </ul>

      <div className="mx-2.5 grid gap-8 px-2.5 pb-8 pt-20 md:mx-20 lg:grid-cols-2 lg:place-self-center xl:flex xl:justify-center">
        {/* <div className="mt-10 justify-center lg:col-span-5 lg:mt-0 lg:flex"> */}

        <img
          src="/pictures/environment.png"
          alt="environment"
          className="w-full rounded-xl md:col-span-5"
        />
        <img
          src="/pictures/valves_about.png"
          alt="environment"
          className="hidden w-full rounded-xl md:col-span-5 xl:block"
        />
        {/* </div> */}
      </div>
    </div>
  );
}
