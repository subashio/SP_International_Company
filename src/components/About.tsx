import { list } from "@/constants/detailes";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function About() {
  return (
    <div className="py-24">
      <MaxWidthWrapper className="mb-10 flex flex-col items-center gap-4 text-center">
        <h1 className="mb-2 max-w-4xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
          Leading with Vision, Serving with Commitment
        </h1>
        <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
          At SP Group, we pride ourselves on our wide global presence, offering
          a comprehensive range of products and services, including Pumps,
          Motors, Valves, Hydraulics, Pipes, Wires & Cables, Solar Pumping
          Systems, and Industrial Services.
        </p>
        <Button
          variant="expandIcon"
          Icon={ArrowRightIcon}
          iconPlacement="right"
          className="px-8"
        >
          About us
        </Button>
      </MaxWidthWrapper>
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
      <div className="mx-2.5 grid gap-8 px-2.5 pb-8 pt-20 md:mx-20 lg:grid-cols-2 lg:place-self-center xl:flex xl:justify-center">
        {/* <div className="mt-10 justify-center lg:col-span-5 lg:mt-0 lg:flex"> */}
        <img
          src="/pictures/environment.png"
          alt="environment"
          className="w-full"
        />
        <img
          src="/pictures/valves_about.png"
          alt="environment"
          className="md:place-item-center w-full"
        />
        {/* </div> */}
      </div>
    </div>
  );
}
