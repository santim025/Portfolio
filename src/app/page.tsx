import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import RevealObserver from "@/components/RevealObserver";
import SysInfo from "@/components/SysInfo";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsBento from "@/components/ProjectsBento";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <RevealObserver />
      <Header />
      <main>
        <Hero />
        <SysInfo />
        <SkillsGrid />
        <ExperienceTimeline />
        <ProjectsBento />
        <Contact />
      </main>
      <Footer />
    </>
  );
}