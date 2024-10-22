"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fadeInAnimation } from "@/constants/amination";
import { DProductCard } from "@/constants/detailes";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProductCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const router = useRouter();
  function handleClick(itemName: string, type: "Products" | "Services") {
    router.push(`/${type}/${encodeURIComponent(itemName)}`);
  }
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      className="w-full max-w-[390px] md:max-w-2xl lg:max-w-[1500px]"
    >
      <CarouselContent className="!z-10">
        {DProductCard.map((item, index) => (
          <CarouselItem key={index} className="!z-1 md:basis-1/2 xl:basis-1/4">
            <Link
              href={`/Products/${item.name}`}
              onClick={() => handleClick(item.name, "Products")}
            >
              <Card
                variants={fadeInAnimation}
                whileInView="animate"
                initial="initial"
                viewport={{
                  once: true,
                }}
                custom={index}
                whileHover={{ scale: 0.95, transition: { duration: 0.02 } }}
                className="flex h-full flex-col items-center justify-around text-card-foreground transition-all duration-300 hover:border-sky-500"
              >
                <CardContent className="flex h-full flex-col items-center justify-around gap-4 py-4">
                  <img src={item.img} alt="Product Image" className="" />

                  <h1 className="my-2 text-xl font-semibold uppercase">
                    {item.name}
                  </h1>
                  <p className="text-center">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="mr-6 hover:scale-110" />
      <CarouselNext className="ml-6 hover:scale-110" />
    </Carousel>
  );
}
