"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { slidedownAnimation } from "@/constants/amination";
import { feedbacks } from "@/constants/detailes";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    <motion.div
      variants={slidedownAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col items-center bg-gray-50 py-20 text-center"
    >
      <h1 className="mb-16 text-4xl font-bold leading-none tracking-tight md:text-5xl">
        What Client&apos;s Say
      </h1>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
        className="w-full max-w-sm overflow-hidden md:max-w-xl lg:max-w-4xl"
      >
        <CarouselContent className="cursor-pointer">
          {feedbacks.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex flex-col items-center justify-center gap-8 text-center"
            >
              <Image
                src={item.Qoutes}
                alt="qoutes image"
                width={100}
                height={10}
                className="h-auto w-auto"
              />
              <p className="max-w-2xl">{item.message}</p>
              <div className="flex gap-3">
                <img
                  src={item.avatar}
                  alt="Sp internationl reviewers avatar image"
                  className="h-7 w-7 rounded-full object-cover object-center"
                />
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
    </motion.div>
  );
}
