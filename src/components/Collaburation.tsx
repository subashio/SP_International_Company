"use client";
import { Logos } from "@/constants/detailes";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Collaburation() {
  return (
    <div className="dark:bg-grid-white/[0.05] relative flex h-24 flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black">
      <InfiniteMovingCards items={Logos} direction="right" speed="fast" />
    </div>
  );
}
