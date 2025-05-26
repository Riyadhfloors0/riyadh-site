import AboutSection from "@/components/home/about-section";
import FeaturesSection from "@/components/home/features-section";
import Hero from "@/components/home/hero";
import OtherServicesSection from "@/components/home/other-services";
import ProjectsSection from "@/components/home/projects";
import ServicesSection from "@/components/home/service-section";
import WhyChooseUsSection from "@/components/home/why-us-section";

export default function Home() {
  return (
   <div>
    <Hero/>
    <ServicesSection />
    <OtherServicesSection />
    <AboutSection/>
   <FeaturesSection/>
    <WhyChooseUsSection/>
     <ProjectsSection/>
   </div>
  );
}
