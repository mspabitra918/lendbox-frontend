import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TimeTested from "@/components/home/TimeTested";
import WhyLendbox from "@/components/home/WhyLendbox";
import DownloadApp from "@/components/home/DownloadApp";
import Partner from "@/components/home/Partner";
import Faq from "@/components/home/Faq";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TimeTested />
      <WhyLendbox />
      {/* <DownloadApp /> */}
      <Partner />
      <FAQSection />
    </>
  );
}
