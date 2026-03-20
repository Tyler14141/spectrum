import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyHarris from "@/components/WhyHarris";
import Implementation from "@/components/Implementation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WhyHarris />
      <Implementation />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
