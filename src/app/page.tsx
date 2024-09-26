import About from "@/components/About";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import ServicesAndProducts from "@/components/ServicesAndProducts";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative">
      <ScrollProgressBar type="circle" color="#00AEFF" showPercentage={true} />
      <Hero />
      <ServicesAndProducts />
      <About />
      <Feedback />
      {/* <Contact /> */}
    </section>
  );
}
