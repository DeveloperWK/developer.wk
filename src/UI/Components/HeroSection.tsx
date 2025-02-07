import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import DeveloperTitleHeroSection from "./DeveloperTitleHeroSection";
import MagicButton from "./MagicButton";
import SocialLink from "./SocialLink";
import Software_dev_Animation from "./Software_dev_Animation";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./Text-generate-effect";
import TypeWriting from "./TypeWriting";
// Initialize the font
const sprintura = localFont({
  src: "../../../public/fonts/Sprintura-Demo.otf",
  display: "swap",
});

export const toxigenesis = localFont({
  src: "../../../public/fonts/toxigenesis-bd.otf",
  display: "swap",
});
const raleway = Raleway({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});
const HeroSection = () => {
  return (
    <section className="pb-20 pt-12 h-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <section>
        <div className="h-screen w-full items-center justify-center dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <section className="flex items-center justify-between gap-5 md:flex-row flex-col md:justify-center md:items-center">
            <section className="h-full text-center md:text-left">
              <p
                className={`${raleway.className} capitalize text-[1rem] italic mt-10`}
              >
                Building scalable web applications with a focus on user
                experience...
              </p>
              <TextGenerateEffect
                words="MD.WASIFUL KABIR"
                //pt-16
                className={` text-center  text-[35px] md:text-5xl lg:text-6xl ${sprintura.className}  md:text-left   `}
              />
              <h2
                className={`text-center uppercase tracking-widest text-xs text-blue-100 md:text-xl md:text-left ${toxigenesis.className} `}
              >
                One Step Ahead of Everyone...
              </h2>
              <section className="mt-5 ">
                <TypeWriting />
              </section>

              <MagicButton
                title="View My Work"
                className="mt-5 "
                icon={<MdOutlineWorkspacePremium className="ml-1" />}
              />
              <section>
                <SocialLink />
              </section>
            </section>
            <section className="h-full">
              <Software_dev_Animation />
            </section>
          </section>
        </div>
      </section>
      <section className="w-100 text-center md:p-5">
        <DeveloperTitleHeroSection text="  One Step Ahead: Redefining Software Engineering Excellence." />
      </section>
    </section>
  );
};

export default HeroSection;
