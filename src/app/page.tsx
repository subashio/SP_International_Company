import Hero from "@/components/Hero";
import ServicesAndProducts from "@/components/ServicesAndProducts";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative">
      <Hero />
      <ServicesAndProducts />
    </section>
  );
}
