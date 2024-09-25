import { card } from "@/constants/detailes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";

export default function ServicesAndProducts() {
  return (
    <div className="bg-[#F2F4F6] py-16">
      <MaxWidthWrapper className="text-center">
        <div className="flex flex-col gap-3">
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
                className="flex h-44 w-56 flex-col items-center justify-around border hover:scale-105 hover:border-[#23A0DA]"
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
