import headingFonts from "../styles/headingFonts.module.css";
import DownloadCV from "./DownloadCV";
import SocialLink from "./SocialLink";
import Software_dev_Animation from "./Software_dev_Animation";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./Text-generate-effect";
import TypeWriting from "./TypeWriting";

const HeroSection = () => {

  return (
    <section className="pb-20 pt-12">
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
              <TextGenerateEffect
                words="MD.WASIFUL KABIR"
                className={`pt-16 text-center  text-[35px] md:text-5xl lg:text-6xl ${headingFonts.heroHeadingAnimated}  md:text-left   `}
              />
              <h2
                className={`text-center uppercase tracking-widest text-xs   text-blue-100 md:text-xl md:text-left ${headingFonts.sloganFont} `}
              >
                One Step Ahead of Everyone...
              </h2>
              <section className="mt-5 ">
              <TypeWriting/>
              </section>
              <DownloadCV />
              <section>
<SocialLink/>
              </section>
            </section>
            <section className="h-full">
              <Software_dev_Animation />
            </section>
          </section>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
