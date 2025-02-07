"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeSnippet = `
function fix404() {
  if (pageNotFound) {
    return navigateToHomePage();
  }
  return enjoyContent();
}
`.trim();

export default function CodeSnippet() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prevCode) => prevCode + codeSnippet[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 w-full max-w-md"
    >
      <pre className="bg-gray-800 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
        <code>{displayedCode}</code>
      </pre>
    </motion.div>
  );
}
