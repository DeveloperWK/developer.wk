"use client";
import { useTypewriter } from "react-simple-typewriter";
import headingFonts from "../styles/headingFonts.module.css";
const TypeWriting = () => {
  const [words] = useTypewriter({
    words: [
      "software Engineer",
      "Programmer",
      "Full Stack Developer",
      "IT Enthusiast",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <p className="text-2xl text-white">
      I &apos;m{" "}
      <span className={`text-purple ${headingFonts.sloganFont} uppercase`}>{words}</span>
      ...
    </p>
  );
};

export default TypeWriting;
