import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import BenefitsGrid from "@/components/BenefitsGrid";
import Testimonials from "@/components/Testimonials";
import EligibilitySection from "@/components/EligibilitySection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <HowItWorks />
        <BenefitsGrid />
        <Testimonials />
        <EligibilitySection />
        <AboutSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
