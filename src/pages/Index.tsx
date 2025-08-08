import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CaseStudy />
        <Benefits />
        <HowItWorks />
        <Security />
        <UseCases />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;