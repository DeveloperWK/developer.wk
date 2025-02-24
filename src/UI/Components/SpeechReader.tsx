import { useState } from "react";

interface SpeechReaderProps {
  text: string;
}

const SpeechReader: React.FC<SpeechReaderProps> = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  let utterances: SpeechSynthesisUtterance[] = [];

  // Detect browser and alert if Firefox
  const detectBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("firefox")) {
      alert(
        "⚠️ Speech synthesis may not work properly on Firefox. Please use a Chromium-based browser (Chrome, Edge, Brave, etc.) for the best experience."
      );
    }
  };
  //   useEffect(() => {
  //     const userAgent = navigator.userAgent.toLowerCase();
  //     if (userAgent.includes("firefox")) {
  //       alert(
  //         "⚠️ Speech synthesis may not work properly on Firefox. Please use a Chromium-based browser (Chrome, Edge, Brave, etc.) for the best experience."
  //       );
  //     }
  //   }, []);

  const startReading = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Stop previous speech

      // Split text into sentences or 120 characters max for better reading
      const sentences = text.match(/[^.!?]+[.!?]*/g) || [text];

      utterances = sentences.map((sentence) => {
        const utterance = new SpeechSynthesisUtterance(sentence.trim());
        utterance.lang = "en-US";
        utterance.rate = 1;
        utterance.pitch = 1;
        return utterance;
      });

      // Chain utterances to ensure continuous speech
      utterances.forEach((utterance, index) => {
        utterance.onend = () => {
          if (index < utterances.length - 1) {
            window.speechSynthesis.speak(utterances[index + 1]);
          } else {
            setIsSpeaking(false);
          }
        };
      });

      // Start speaking the first sentence
      if (utterances.length > 0) {
        window.speechSynthesis.speak(utterances[0]);
        setIsSpeaking(true);
      }
    } else {
      alert("⚠️ Your browser does not support speech synthesis.");
    }
  };

  const stopReading = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <section
      className="text-white p-4 md:p-6 lg:p-8 border border-gray-500 mt-4 rounded-lg 
                 bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 
                 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 custom-scrollbar"
    >
      <p className="text-lg leading-relaxed text-gray-300">{text}</p>

      <div className="flex gap-3 mt-4">
        {!isSpeaking ? (
          <button
            onClick={() => {
              startReading();
              detectBrowser();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            🔊 Read Aloud
          </button>
        ) : (
          <button
            onClick={stopReading}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            ⏹ Stop
          </button>
        )}
      </div>
    </section>
  );
};

export default SpeechReader;
