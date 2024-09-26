"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { feedbacks } from "@/constants/detailes";

export default function Feedback() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div className="flex flex-col items-center bg-[#F9FAFB] py-20 text-center">
      <h1 className="mb-16 text-4xl font-bold leading-none tracking-tight md:text-5xl">
        What Client's Say
      </h1>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
        className="w-full max-w-sm md:max-w-xl lg:max-w-4xl"
      >
        <CarouselContent className="cursor-pointer">
          {feedbacks.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex flex-col items-center justify-center gap-8 text-center"
            >
              <img src={item.Qoutes} alt="symbole" className="w-10" />
              <p className="max-w-2xl">{item.message}</p>
              <div className="flex gap-3">
                <img src={item.avatar} alt="" />
                <p>
                  <span className="font-semibold">{item.name} / </span>
                  {item.position}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-8 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
