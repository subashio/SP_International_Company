import About from "@/components/About";
import Faq from "@/components/Faq";
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
      <Faq />
    </section>
  );
}
