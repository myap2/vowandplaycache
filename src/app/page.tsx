import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChildcare from "@/components/WhyChildcare";
import Packages from "@/components/Packages";
import HowItWorks from "@/components/HowItWorks";
import TrustSafety from "@/components/TrustSafety";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChildcare />
        <Packages />
        <HowItWorks />
        <TrustSafety />
        <ServiceArea />
        <FAQ />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
