"use client";

import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpFromDot } from "lucide-react";

interface ScrollProgressBarType {
  type?: "circle" | "bar";
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  color?: string;
  strokeSize?: number;
  showPercentage?: boolean;
}

export default function ScrollProgressBar({
  type = "circle",
  position = "bottom-right",
  color = "hsl(var(--primary))",
  strokeSize = 2,
  showPercentage = false,
}: ScrollProgressBarType) {
  const { scrollYProgress } = useScroll();

  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [percentage, setPercentage] = React.useState(0);

  useMotionValueEvent(scrollPercentage, "change", (latest) => {
    setPercentage(Math.round(latest));
  });

  if (type === "bar") {
    return (
      <div
        className="pointer-events-none fixed end-0 start-0 top-0 !z-50"
        style={{ height: `${strokeSize + 2}px` }}
      >
        <span
          className="block h-full w-full bg-primary"
          style={{
            backgroundColor: color,
            width: `${percentage}%`,
          }}
        ></span>
      </div>
    );
  }

  return (
    <Link
      href="#"
      className={cn("fixed z-50 flex items-center justify-center", {
        "end-0 top-0": position === "top-right",
        "bottom-0 end-0": position === "bottom-right",
        "start-0 top-0": position === "top-left",
        "bottom-0 start-0": position === "bottom-left",
      })}
    >
      {percentage > 0 && (
        <>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              strokeWidth={strokeSize}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              stroke={color}
              fill="#ECF9FF"
              strokeDashoffset="0"
              strokeWidth={strokeSize}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          {showPercentage && (
            <span className="absolute ml-2">
              {<ArrowUpFromDot color="#00AEFF" className="mr-2 w-20" />}
            </span>
          )}
        </>
      )}
    </Link>
  );
}
