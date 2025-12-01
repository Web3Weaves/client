import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Architecture from "./components/Architecture";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Investor from "./components/Investor";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-text-primary font-sans">
      <Hero />
      <Problem />
      <HowItWorks />
      <Architecture />
      <Features />
      <Pricing />
      <Investor />
      <CTA />
      <Footer />
    </main>
  );
}
