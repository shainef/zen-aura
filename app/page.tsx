import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ROICalculator from "@/components/ROICalculator";
import ValueProps from "@/components/ValueProps";
import CaseStudy from "@/components/CaseStudy";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ROICalculator />
        <ValueProps />
        <CaseStudy />
        <HowItWorks />
        <Services />
        <SocialProof />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
