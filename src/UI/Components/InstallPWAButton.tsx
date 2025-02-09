"use client"; // Required for Next.js 15

import { BeforeInstallPromptEvent } from "@/types/global";
import { useEffect, useState } from "react";

const InstallPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handler = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener
      );
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the PWA installation");
    } else {
      console.log("User dismissed the PWA installation");
    }

    setDeferredPrompt(null);
    setShowButton(false);
  };

  useEffect(() => {
    const handleAppInstalled = () => {
      console.log("PWA installed");
      setShowButton(false);
    };

    window.addEventListener("appinstalled", handleAppInstalled);
    return () => window.removeEventListener("appinstalled", handleAppInstalled);
  }, []);

  return (
    showButton && (
      <button
        onClick={handleInstallClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Install App
      </button>
    )
  );
};

export default InstallPWAButton;
