import { card } from "@/constants/detailes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";

export default function ServicesAndProducts() {
  return (
    <div className="bg-[#F2F4F6] py-20">
      <MaxWidthWrapper className="text-center">
        <div className="flex flex-col gap-3">
          <p className="text-[#00AEFF]">Trusted Worldwide</p>
          <h1 className="mb-20 text-4xl font-bold leading-none tracking-tight md:text-5xl">
            Products & Services
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {card.map((item) => (
            <Link href={item.href}>
              <Card
                key={item.id}
                className="flex h-44 w-64 flex-col items-center justify-around transition-all duration-300 hover:scale-105 hover:border-[#00AEFF]"
              >
                <img src={item.src} alt="image" className={item.style} />
                <p>{item.name}</p>
              </Card>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
