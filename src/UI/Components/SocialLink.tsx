"use client";
import { motion } from "motion/react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const SocialLink = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 0.8,
    },
  };
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-5 py-4 justify-center md:justify-start "
    >
      <motion.li
        variants={childVariants}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
      >
        <a href="https://github.com/DeveloperWK" target="__blank">
          <FaSquareGithub size={30} className="hover:text-purple" />
        </a>
      </motion.li>
      <motion.li
        variants={childVariants}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
      >
        <a
          href="https://www.linkedin.com/in/md-wasiful-kabir-4885a7330/ "
          target="__blank"
        >
          <FaLinkedin size={30} className="hover:text-purple" />
        </a>
      </motion.li>
      <motion.li
        variants={childVariants}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
      >
        <a href="https://www.facebook.com/developerwk" target="__blank">
          <FaFacebookSquare size={30} className="hover:text-purple" />
        </a>
      </motion.li>
    </motion.ul>
  );
};

export default SocialLink;
