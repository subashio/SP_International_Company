"use client";
import { faqArry } from "@/constants/detailes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";
import { slidedownAnimation } from "@/constants/amination";

export default function Faq() {
  return (
    <motion.div
      variants={slidedownAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="/Faq"
      className="mx-auto flex w-full flex-col justify-center border-b py-24"
    >
      <h1 className="mb-8 w-full text-center text-4xl font-bold leading-none tracking-tight md:text-5xl">
        FAQ
      </h1>
      <MaxWidthWrapper>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="!no-underline md:text-xl">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="max-w-4xl">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="!no-underline md:text-xl">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent className="max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas
              quis quisquam repellat rem! Fuga dignissimos tempora praesentium?
              Cupiditate, laboriosam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="!no-underline md:text-xl">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent className="max-w-4xl">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="!no-underline md:text-xl">
              How do I contact you ?
            </AccordionTrigger>
            <AccordionContent className="max-w-4xl">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </MaxWidthWrapper>
    </motion.div>
  );
}
