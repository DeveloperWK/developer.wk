"use client";
import { motion } from "framer-motion";
import homeFonts from "../styles/homeFonts.module.css";
const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
};
const DeveloperTitleHeroSection = ({ text }: { text: string }) => {
  return (
    <section>
      <p className={`text-xl md:text-4xl ${homeFonts.sloganFont}`}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ))}
      </p>
    </section>
  );
};

export default DeveloperTitleHeroSection;
