import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";
import Link from "next/link";

export default function ServicesAndProducts() {
  const card: TCard[] = [
    { id: 1, src: "/hydraulics.png", name: "HYDRAULICS", href: "#" },
    { id: 2, src: "/hose.png", name: "HOSE MANAGMENT", href: "#" },
    { id: 3, src: "/pneumatics.png", name: "PNEUMATICS", href: "#" },
    { id: 4, src: "/filteration.png", name: "FILTRATION SYSTEM", href: "#" },
    { id: 5, src: "/dewatering.png", name: "DEWATERING", href: "#" },
    {
      id: 6,
      src: "/electrical.png",
      name: "ELECTRICAL & MECHANICAL SPARES",
      href: "#",
    },
    { id: 7, src: "/pipeline.png", name: "PIPELINE FLUSHING", href: "#" },
    { id: 8, src: "/pump.png", name: "PUMPS", href: "#" },
    { id: 9, src: "/welding.png", name: "WELDING SOLUTION", href: "#" },
    { id: 10, src: "/pipes.png", name: "PIPES - FITTING FLANGES", href: "#" },
    { id: 11, src: "/valves.png", name: "VALVES& ACTUATORS", href: "#" },
    { id: 12, src: "/env.png", name: "ENVIRONMENT SERVICES", href: "#" },
    { id: 13, src: "/oilandgas.png", name: "REFINIRIES OIL & GAS", href: "#" },
    {
      id: 14,
      src: "/waterandwaste.png",
      name: "WATER & WASTE WATER",
      href: "#",
    },
    { id: 15, src: "/power.png", name: "POWER", href: "#" },
    { id: 16, src: "/chemical.png", name: "CHEMICAL & PROCESS", href: "#" },
  ];
  return (
    <div className="bg-[#F2F4F6] py-24">
      <MaxWidthWrapper className="text-center">
        <div className="">
          <p className="text-[#23A0DA]">Trusted Worldwide</p>
          <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
            Products & Services
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {card.map((item) => (
            <Link href={item.href}>
              <Card
                key={item.id}
                className="flex h-36 w-48 flex-col items-center justify-around"
              >
                <img src={item.src} alt="image" className="mt-2" />
                <p>{item.name}</p>
              </Card>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
