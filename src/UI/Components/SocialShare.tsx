"use client";
import { useState } from "react";
import { FaCopy, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialShare = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
      {[
        {
          icon: <FaFacebook className="text-white w-5 h-5" />,
          url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`,
          bg: "bg-blue-600 hover:bg-blue-700",
        },
        {
          icon: <FaTwitter className="text-white w-5 h-5" />,
          url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            currentUrl
          )}`,
          bg: "bg-blue-400 hover:bg-blue-500",
        },
        {
          icon: <FaLinkedin className="text-white w-5 h-5" />,
          url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            currentUrl
          )}`,
          bg: "bg-blue-700 hover:bg-blue-800",
        },
      ].map(({ icon, url, bg }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition-all duration-300 shadow-md ${bg}`}
        >
          {icon}
        </a>
      ))}

      <button
        onClick={handleCopyLink}
        className="p-3 bg-gray-600 hover:bg-gray-700 rounded-full transition-all duration-300 shadow-md relative"
      >
        <FaCopy className="text-white w-5 h-5" />
        {copySuccess && (
          <span className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 shadow-lg">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
};

export default SocialShare;
