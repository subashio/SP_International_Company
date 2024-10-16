"use client";
import React from "react";
import { motion } from "framer-motion";
import { container, listItem, slidedownAnimation } from "@/constants/amination";

export default function Points({
  title,
  points,
}: {
  title: string;
  points?: { content: string }[];
}) {
  return (
    <div className="mb-10">
      <motion.h1
        variants={slidedownAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mb-8 max-w-6xl text-xl font-bold leading-none tracking-tight md:text-2xl"
      >
        {title}
      </motion.h1>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl list-disc px-8"
      >
        {points?.map((point, index) => (
          <motion.li variants={listItem} key={index} className="py-2">
            {point.content}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
