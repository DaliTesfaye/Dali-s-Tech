import { AboutSection } from "@/components/sections/about";
import ContactForm from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactForm />
        <FooterSection />
    </>

  );
}
