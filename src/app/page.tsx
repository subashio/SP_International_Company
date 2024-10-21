import About from "@/components/About";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import ServicesAndProducts from "@/components/ServicesAndProducts";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

export default function Home() {
  return (
    <section className="relative">
      <ScrollProgressBar type="circle" color="#00AEFF" showPercentage={true} />
      <Hero />
      <ServicesAndProducts />
      <About />
      <Feedback />
    </section>
  );
}
