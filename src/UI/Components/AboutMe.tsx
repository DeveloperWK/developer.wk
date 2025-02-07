import { educationList } from "@/Data/EducationList";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import aboutSectionImage from "../../../public/myImg.webp";
import DownloadCV from "./DownloadCV";
const AboutMe = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-10 w-100 justify-between items-center">
        <section className="p-5">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold italic">
            Curious about me? Here you have it:
          </h3>
          <p className="pt-2">
            I&apos;m a passionate. self-proclaimed designer who specializes in
            MERN stack. I love to build and design. I have been working with
            MERN. I am very enthusiastic about bringing the technical and visual
            aspects of digital products to life. user experience, pixel perfect
            design, and writing Clear, readable, highly performant code matters
            to me.
          </p>
          <p className="pt-2">
            I began my journey as a web developer in 2019, and since then.
            I&apos;ve continued to grow and evolve as a developer, taking on new
            Challenges and learning the latest technologies along the way, Now,
            in my thirties, 5 years after starting my web development journey.
            I&apos;m building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestis, Tailwindcss,
            Supaöase and much more.
          </p>
          <p className="pt-2">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="pt-2">
            When I&apos;m not in full-on developer mode, you can find me
            hovering around on mail, witnessing the journey Of early startups or
            enjoying some free time. You can follow me on Twitter where I share
            tech- related bites and buibd in public, or you can follow me on
            GitHub.
          </p>
          <p className="pt-2">Finally, Here are my educational background.</p>
          <ul>
            {educationList.map((e) => (
              <li key={e.id}>
                <div className="flex items-center gap-3 pt-1">
                  <FaRegArrowAltCircleRight />
                  <span className="pt-1">{e.sentence}</span>
                </div>
              </li>
            ))}
          </ul>
          <DownloadCV />
        </section>
        <section className="">
          <Image
            src={aboutSectionImage}
            alt="Developer.WK"
            loading="lazy"
            placeholder="blur"
            quality={75}
            title="Developer.WK"
          />
        </section>
      </section>
    </>
  );
};

export default AboutMe;
