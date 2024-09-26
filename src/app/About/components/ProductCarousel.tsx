"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ProductCard } from "@/constants/detailes";
import Link from "next/link";
export default function ProductCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm md:max-w-4xl lg:max-w-7xl"
    >
      <CarouselContent className="!z-10">
        {ProductCard.map((item) => (
          <CarouselItem
            key={item.id}
            className="!z-10 md:basis-1/2 xl:basis-1/4"
          >
            <Link href="#">
              <Card className="transition-all duration-300 hover:border-[#00AEFF]">
                <CardContent className="flex flex-col gap-2">
                  <img src={item.img} alt="Product Image" />

                  <h1 className="my-2 text-xl font-semibold uppercase">
                    {item.name}
                  </h1>
                  <p className="my-2 text-[14px]">{item.description}</p>
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
