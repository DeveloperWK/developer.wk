import AboutMe from "@/UI/Components/AboutMe";
import CallToAction from "@/UI/Components/CallToAction";
import FeaturedProjects from "@/UI/Components/FeaturedProjects";
import HeroSection from "@/UI/Components/HeroSection";
import SkillsSection from "@/UI/Components/SkillsSection";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <section className="max-w-7xl w-full">
        <HeroSection />
        <AboutMe />
        <FeaturedProjects />
        <SkillsSection />
        <CallToAction />
      </section>
    </main>
  );
}
